import React from 'react';

export interface MinaGitWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaGitWavesSolid(props: MinaGitWavesSolidProps): React.ReactElement;
export default MinaGitWavesSolid;
