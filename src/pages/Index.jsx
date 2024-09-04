import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 py-12 px-4 sm:px-6 lg:px-8 font-mono">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <pre className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
{`
   _    _                    _    _    _ _     _           _     _ 
  / \\  | |__  _ __ ___   ___| |  / \\  | | | __| |_  _   _(_) __| |
 / _ \\ | '_ \\| '_ \` _ \\ / _ \\ | / _ \\ | | |/ _\` | || | | | |/ _\` |
/ ___ \\| | | | | | | | |  __/ |/ ___ \\| | | (_| | || |_| | | (_| |
/_/   \\_\\_| |_|_| |_| |_|\\___|_/_/   \\_\\_|_|\\__,_|\\__,_,_|_|\\__,_|
`}
          </pre>
          <p className="text-xl mt-4">Developer & Information Security Auditor</p>
          <p className="text-md">Muscat, Oman</p>
          <div className="flex justify-center mt-4 space-x-4">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>+968 96672579</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>dhyabi@gmail.com</span>
            </div>
          </div>
        </header>

        <Card className="mb-8 bg-black border-green-400">
          <CardHeader>
            <CardTitle className="text-green-400">==== Professional Summary ====</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Experienced Developer and Information Security Auditor with expertise in programming, cybersecurity, and compliance. Skilled in Node.js, Web3 technologies, blockchain, and various aspects of information security including penetration testing and source code review.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 bg-black border-green-400">
          <CardHeader>
            <CardTitle className="text-green-400">==== Work Experience ====</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold">Information Security Audit and Compliance</h3>
                <p>Financial Service Authority</p>
                <p className="text-sm">Current Position</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Information Security Audit and Compliance</h3>
                <p>Asyad Group</p>
                <p className="text-sm">Previous Position</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Programmer and Information Security Specialist</h3>
                <p>Muscat Stock Exchange</p>
                <p className="text-sm">8 Years</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black border-green-400">
          <CardHeader>
            <CardTitle className="text-green-400">==== Skills ====</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-green-400 text-green-400">[Node.js]</Badge>
              <Badge variant="outline" className="border-green-400 text-green-400">[Web3]</Badge>
              <Badge variant="outline" className="border-green-400 text-green-400">[Blockchain]</Badge>
              <Badge variant="outline" className="border-green-400 text-green-400">[Information Security]</Badge>
              <Badge variant="outline" className="border-green-400 text-green-400">[Penetration Testing]</Badge>
              <Badge variant="outline" className="border-green-400 text-green-400">[Source Code Review]</Badge>
              <Badge variant="outline" className="border-green-400 text-green-400">[Cybersecurity]</Badge>
              <Badge variant="outline" className="border-green-400 text-green-400">[Compliance]</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;