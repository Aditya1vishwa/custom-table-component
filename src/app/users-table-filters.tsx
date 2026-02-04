"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { DateRangePicker } from "@/components/date-range-picker"
import type { UsersTableFiltersProps } from "@/types"

export function UsersTableFilters({
    status,
    role,
    dateFrom,
    dateTo,
    onStatusChange,
    onRoleChange,
    onDateRangeChange,
}: UsersTableFiltersProps) {
    return (
        <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
                <Label htmlFor="filter-status" className="text-sm text-muted-foreground whitespace-nowrap">
                    Status
                </Label>
                <Select
                    value={status ?? "all"}
                    onValueChange={(v) => onStatusChange(v === "all" ? null : v)}
                >
                    <SelectTrigger id="filter-status" className="h-9 w-[120px]">
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex items-center gap-2">
                <Label htmlFor="filter-role" className="text-sm text-muted-foreground whitespace-nowrap">
                    Role
                </Label>
                <Select
                    value={role ?? "all"}
                    onValueChange={(v) => onRoleChange(v === "all" ? null : v)}
                >
                    <SelectTrigger id="filter-role" className="h-9 w-[120px]">
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="editor">Editor</SelectItem>
                        <SelectItem value="viewer">Viewer</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex items-center gap-2">
                <Label className="text-sm text-muted-foreground whitespace-nowrap">
                    Created
                </Label>
                <DateRangePicker
                    dateFrom={dateFrom}
                    dateTo={dateTo}
                    onRangeChange={onDateRangeChange}
                    placeholder="Created date range"
                />
            </div>
        </div>
    )
}
