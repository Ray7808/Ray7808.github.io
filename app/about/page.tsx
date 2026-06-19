export default function About() {
  return (
    <div className="w-full transition-colors duration-300 min-h-[calc(100vh-80px)]">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold">About</h1>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              This is the about page. Share information about yourself, your
              background, skills, and interests here.
            </p>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Background</h2>
              <p className="leading-relaxed">
                Add your background information here.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">Skills</h2>
              <p className="leading-relaxed">
                List your skills and expertise here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
