import { Progress } from "@chakra-ui/react";

function Idioma({ idioma = "", nivelA = 0, nivelB = "" }) {
  return (
    <Progress.Root
      defaultValue={nivelA}
      variant="subtle"
      className="row"
      striped
    >
      <Progress.Label>{idioma}</Progress.Label>
      <Progress.Track flex="2">
        <Progress.Range />
      </Progress.Track>
      <Progress.ValueText>{nivelB}</Progress.ValueText>
    </Progress.Root>
  );
}

export default Idioma;
