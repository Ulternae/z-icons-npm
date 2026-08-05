import React from 'react';

export interface MinaPauseWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPauseWavesSolid(props: MinaPauseWavesSolidProps): React.ReactElement;
export default MinaPauseWavesSolid;
