export default function convertoStringToPhrases(data: string): string[] {
  const separateByPhrases = data.split(/\n/g);
  const onlyPhrases = separateByPhrases.filter(phrase => phrase !== '');

  return onlyPhrases;
}
