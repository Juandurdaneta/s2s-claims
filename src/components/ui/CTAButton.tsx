import { Button } from "@/components/ui/Button";

interface CTAButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export function CTAButton({
  children = "Claim Your FREE Policy Review",
  className,
}: CTAButtonProps) {
  return (
    <Button href="/contact" size="lg" variant="primary" className={className}>
      {children}
    </Button>
  );
}
