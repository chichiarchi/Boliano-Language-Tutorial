import { Waves, Sun, MapPin, Users } from 'lucide-react';

const Culture = () => {
  return (
    <div className="space-y-20">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-sea-blue mb-4">The Bolinao Heritage</h1>
        <p className="text-sea-blue/60 max-w-2xl mx-auto">
          The Bolinao people (Bolinaoen) possess a culture as vibrant and deep as the waters surrounding their peninsula.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
           <div className="absolute inset-0 bg-sea-blue flex items-center justify-center text-sand-beige p-12">
              <div className="text-center">
                <Waves size={64} className="mx-auto mb-6 text-coral opacity-50" />
                <h3 className="text-3xl font-bold mb-4">Coastal Identity</h3>
                <p className="opacity-80 leading-relaxed">
                  Fishing and sea-faring are at the heart of Bolinao's economy and folklore. The sea is not just a source of food, but a source of identity.
                </p>
              </div>
           </div>
        </div>

        <div className="space-y-8">
          <div className="flex gap-6 items-start">
            <div className="bg-coral/10 p-3 rounded-2xl text-coral shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-sea-blue mb-2">Pangasinan Peninsula</h4>
              <p className="text-sea-blue/60 leading-relaxed">
                Nestled at the western tip of Pangasinan, Bolinao has served as a cultural crossroads for centuries.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="bg-ocean-teal/10 p-3 rounded-2xl text-ocean-teal shrink-0">
              <Sun size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-sea-blue mb-2">Salt of the Earth</h4>
              <p className="text-sea-blue/60 leading-relaxed">
                Known for its salt beds and the "salt-making" tradition that has sustained families for generations.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="bg-sea-blue/10 p-3 rounded-2xl text-sea-blue shrink-0">
              <Users size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-sea-blue mb-2">Oral Traditions</h4>
              <p className="text-sea-blue/60 leading-relaxed">
                Bolinao songs and myths are passed down through the dialect, emphasizing the importance of preserving Binubolinao.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-sea-blue text-sand-beige p-12 rounded-[3rem] text-center">
        <h2 className="text-3xl font-bold mb-6">Support Preservation</h2>
        <p className="max-w-xl mx-auto opacity-80 mb-10">
          The Bolinao dialect is classified as a distinct language, not just a sub-dialect of Pangasinense. Join us in documenting and celebrating this unique voice.
        </p>
        <button className="bg-coral text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-sea-blue transition-all">
          Contribute to Archive
        </button>
      </section>
    </div>
  );
};

export default Culture;
