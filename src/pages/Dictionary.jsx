import DictionaryGrid from '../components/DictionaryGrid';

const Dictionary = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-sea-blue mb-4">Linguistic Archive</h1>
        <p className="text-sea-blue/60 max-w-xl mx-auto">
          Explore the rich vocabulary of the Bolinao dialect. Use the filters below to find specific terms in Bolinao, Tagalog, or English.
        </p>
      </div>

      <DictionaryGrid />
    </div>
  );
};

export default Dictionary;
