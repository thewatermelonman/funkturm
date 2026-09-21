import { PerlinNoise } from '@paper-design/shaders-react';

export default function TvGrain() {

	return (

		<PerlinNoise
		  width="100vw"
		  height="100vh"
		  colorBack="#000000"
		  colorFront="#506950"
		  proportion={0.35}
		  softness={0.4}
		  octaveCount={3}
		  persistence={0.3}
		  lacunarity={12.5}
		  speed={3.2}
		  scale={0.08}
		  rotation={96}
		/>
	);
}
