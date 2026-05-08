import React from 'react';

export interface MinaGitWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGitWaves: React.FC<MinaGitWavesProps>;
export default MinaGitWaves;
