export interface IButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "danger";
    disabled?: boolean;
    className?: string;
  }