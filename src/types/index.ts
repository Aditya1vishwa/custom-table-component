export type PaymentStatus = "pending" | "processing" | "success" | "failed"

export interface User {
    id: string
    name: string
    email: string
    phone: string
    company: string
    department: string
    location: string
    role: string
    status: string
    plan: string

    lastLoginAt: string | Date
    createdAt: string | Date
}

export type DateRangeFilter = {
    from: string | null
    to: string | null
}

export type UsersTableFiltersProps = {
    status: string | null
    role: string | null
    dateFrom: string | null
    dateTo: string | null
    onStatusChange: (status: string | null) => void
    onRoleChange: (role: string | null) => void
    onDateRangeChange: (range: DateRangeFilter) => void
}
