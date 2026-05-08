import React from 'react';

export interface MinaGitWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGitWavesSolid: React.FC<MinaGitWavesSolidProps>;
export default MinaGitWavesSolid;
