import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]"
      />
      <Container className="relative flex flex-col items-center text-center">
        <Badge variant="verified">Powered by the Reality protocol</Badge>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Survey data you can verify, not just trust.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          Sentiment is a decentralized survey network. Respondents earn rewards for verified
          participation. Buyers get cryptographically verified data instead of bots and noise.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/respondents" size="lg" variant="primary">
            Start earning as a respondent
          </Button>
          <Button href="/buyers" size="lg" variant="secondary">
            Explore verified data
          </Button>
        </div>
      </Container>
    </section>
  );
}
