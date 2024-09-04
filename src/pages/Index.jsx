import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 p-4 font-mono overflow-auto">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <pre className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-green-500">
{`
   _    _                    _    _    _ _     _           _     _ 
  / \\  | |__  _ __ ___   ___| |  / \\  | | | __| |_  _   _(_) __| |
 / _ \\ | '_ \\| '_ \` _ \\ / _ \\ | / _ \\ | | |/ _\` | || | | | |/ _\` |
/ ___ \\| | | | | | | | |  __/ |/ ___ \\| | | (_| | || |_| | | (_| |
/_/   \\_\\_| |_|_| |_| |_|\\___|_/_/   \\_\\_|_|\\__,_|\\__,_,_|_|\\__,_|
`}
          </pre>
          <div className="mt-4 text-green-300">
            <p className="text-xl">Developer & Information Security Auditor</p>
            <p className="text-md">Muscat, Oman</p>
            <div className="flex mt-2 space-x-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+968 96672579</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>dhyabi@gmail.com</span>
              </div>
            </div>
          </div>
        </header>

        <Card className="mb-6 bg-gray-900 border-green-500">
          <CardContent className="p-4">
            <pre className="text-green-500 mb-2">
{`
 ____                                          
|  _ \\ _ __ ___   __ _ _ __ __ _ _ __ ___  ___ 
| |_) | '__/ _ \\ / _\` | '__/ _\` | '_ \` _ \\/ __|
|  __/| | | (_) | (_| | | | (_| | | | | | \\__ \\
|_|   |_|  \\___/ \\__, |_|  \\__,_|_| |_| |_|___/
                 |___/                        
`}
            </pre>
            <p className="text-green-300">
              Experienced Developer and Information Security Auditor with expertise in programming, cybersecurity, and compliance. Skilled in Node.js, Web3 technologies, blockchain, and various aspects of information security including penetration testing and source code review.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-gray-900 border-green-500">
          <CardContent className="p-4">
            <pre className="text-green-500 mb-2">
{`
 _____                      _                      
| ____|_  ___ __   ___ _ __(_) ___ _ __   ___ ___  
|  _| \\ \\/ / '_ \\ / _ \\ '__| |/ _ \\ '_ \\ / __/ _ \\ 
| |___ >  <| |_) |  __/ |  | |  __/ | | | (_|  __/ 
|_____/_/\\_\\ .__/ \\___|_|  |_|\\___|_| |_|\\___\\___| 
           |_|                                     
`}
            </pre>
            <div className="space-y-4 text-green-300">
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

        <Card className="bg-gray-900 border-green-500">
          <CardContent className="p-4">
            <pre className="text-green-500 mb-2">
{`
 ____  _    _ _ _     
/ ___|| | _(_) | |___ 
\\___ \\| |/ / | | / __|
 ___) |   <| | | \\__ \\
|____/|_|\\_\\_|_|_|___/
                      
`}
            </pre>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-green-500 text-green-300">[Node.js]</Badge>
              <Badge variant="outline" className="border-green-500 text-green-300">[Web3]</Badge>
              <Badge variant="outline" className="border-green-500 text-green-300">[Blockchain]</Badge>
              <Badge variant="outline" className="border-green-500 text-green-300">[Information Security]</Badge>
              <Badge variant="outline" className="border-green-500 text-green-300">[Penetration Testing]</Badge>
              <Badge variant="outline" className="border-green-500 text-green-300">[Source Code Review]</Badge>
              <Badge variant="outline" className="border-green-500 text-green-300">[Cybersecurity]</Badge>
              <Badge variant="outline" className="border-green-500 text-green-300">[Compliance]</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;