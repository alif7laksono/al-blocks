import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen text-black">
      <Card className="w-full max-w-xl p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Page Not Found
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-4">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="flex justify-center">
            <Link href="/" passHref>
              <Button variant="outline" className="bg-black text-white">
                Return Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
