import { PaperTexture } from '@paper-design/shaders-react';

export default function Paper() {

	return (
		<PaperTexture
			width="100vw"
			height="100vh"
			colorBack="#000000"
			colorPaper="#111118"
			colorShadow="#040404"
			blending={1}
			distortion={0.45}
			clip={false}
			angle={300}
			seed={374}
			roughness={0.95}
			roughnessSize={0.15}
			roughnessRows={0}
			fiber={0.45}
			fiberSize={0.61}
			folds={0}
			foldSizeX={1}
			foldSizeY={1}
			foldOffsetX={0.03}
			foldOffsetY={0.22}
			wrinkles={1}
			wrinkleSize={0.86}
			crumples={0.19}
			crumpleCount={6}
			drops={0}
			scale={0.4}
			fit="contain"
		/>
	);
}
