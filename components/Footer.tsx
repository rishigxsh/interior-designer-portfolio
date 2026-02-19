import Container from "@/components/ui/Container";

const email = "mruduladhondalay@gmail.com";
const phone = "+1 437-667-6043";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 mt-10">
      <Container>
        <div className="py-8 lg:py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${email}`}
                className="text-sm font-light text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm"
              >
                {email}
              </a>
              <a
                href={`tel:${phone}`}
                className="text-sm font-light text-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm"
              >
                {phone}
              </a>
            </div>

                  {/* Copyright */}
                  <div className="text-sm font-light text-muted/70">
                    © {currentYear} Design Consultant. All rights reserved.
                  </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
