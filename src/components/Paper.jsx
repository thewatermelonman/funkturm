import { PaperTexture } from '@paper-design/shaders-react';

export default function Paper() {

	return (
		<PaperTexture
			width="100vw"
			height="100vh"
			colorBack="#00ff00"
			colorPaper="#ff0000"
			colorShadow="#0000ff"
			blending={1}
			distortion={0.45}
			clip={false}
			angle={300}
			seed={374}
			roughness={0.35}
			roughnessSize={0.25}
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
			scale={0.7}
			fit="contain"
		/>
	);
}
