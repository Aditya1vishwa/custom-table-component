"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar, type DateRange } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export interface DateRangePickerProps {
  /** ISO date string or null for range start */
  dateFrom: string | null
  /** ISO date string or null for range end */
  dateTo: string | null
  /** Called when the user selects a range. Pass ISO date strings or null to clear. */
  onRangeChange: (range: { from: string | null; to: string | null }) => void
  className?: string
  placeholder?: string
  id?: string
}

export function DateRangePicker({
  dateFrom,
  dateTo,
  onRangeChange,
  className,
  placeholder = "Pick a date",
  id,
}: DateRangePickerProps) {
  const [open, setOpen] = React.useState(false)

  const range: DateRange | undefined = React.useMemo(() => {
    const from = dateFrom ? new Date(dateFrom) : undefined
    const to = dateTo ? new Date(dateTo) : undefined
    if (!from && !to) return undefined
    return { from, to }
  }, [dateFrom, dateTo])

  const handleSelect = (selected: DateRange | undefined) => {
    if (!selected) {
      onRangeChange({ from: null, to: null })
      return
    }
    const from = selected.from
      ? selected.from.toISOString().slice(0, 10)
      : null
    const to = selected.to
      ? selected.to.toISOString().slice(0, 10)
      : null
    onRangeChange({ from, to })
    if (from && to) setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          id={id}
          className={cn(
            "justify-start px-2.5 font-normal",
            !dateFrom && !dateTo && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon />
          {dateFrom ? (
            dateTo ? (
              <>
                {format(new Date(dateFrom), "LLL dd, y")} -{" "}
                {format(new Date(dateTo), "LLL dd, y")}
              </>
            ) : (
              format(new Date(dateFrom), "LLL dd, y")
            )
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          defaultMonth={range?.from}
          selected={range}
          onSelect={handleSelect}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  )
}
