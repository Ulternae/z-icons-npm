import React from 'react';

export interface MinaGitWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaGitWaves(props: MinaGitWavesProps): React.ReactElement;
export default MinaGitWaves;
