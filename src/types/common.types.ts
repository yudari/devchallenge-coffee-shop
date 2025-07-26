export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type BadgeVariant = 'popular' | 'sold-out';

export interface ButtonProps {
    children: React.ReactNode,
    variant?: ButtonVariant,
    onClick?: () => void,
    disabled?: boolean
    className?: string
}

export interface BadgeProps {
    children: React.ReactNode,
    variant?: BadgeVariant,
    className?: string
}
