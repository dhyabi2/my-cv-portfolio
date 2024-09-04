import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Mohammed Al-Habsi</h1>
          <p className="text-xl text-gray-600">Developer & Information Security Auditor</p>
          <p className="text-md text-gray-500">Muscat, Oman</p>
        </header>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Experienced Developer and Information Security Auditor with 12 years of expertise in programming, cybersecurity, and compliance. Skilled in Node.js, Web3 technologies, blockchain, and various aspects of information security including penetration testing and source code review.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Work Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold">Information Security Audit and Compliance</h3>
                <p className="text-gray-600">Financial Service Authority</p>
                <p className="text-sm text-gray-500">Current Position</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Information Security Audit and Compliance</h3>
                <p className="text-gray-600">Asyad Group</p>
                <p className="text-sm text-gray-500">Previous Position</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Programmer and Information Security Specialist</h3>
                <p className="text-gray-600">Muscat Stock Exchange</p>
                <p className="text-sm text-gray-500">8 Years</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">Web3</Badge>
              <Badge variant="secondary">Blockchain</Badge>
              <Badge variant="secondary">Information Security</Badge>
              <Badge variant="secondary">Penetration Testing</Badge>
              <Badge variant="secondary">Source Code Review</Badge>
              <Badge variant="secondary">Cybersecurity</Badge>
              <Badge variant="secondary">Compliance</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;