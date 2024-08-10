import { Card } from "@/components/ui/card";
type HomeCardProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};
export default function HomeCard({
  children,
  className,
  onClick,
}: HomeCardProps) {
  return (
    <Card
      onClick={onClick}
      className={
        "whitespace-pre-wrap p-2 h-64 overflow-hidden " + (className || "")
      }
    >
      {children}
    </Card>
  );
}
