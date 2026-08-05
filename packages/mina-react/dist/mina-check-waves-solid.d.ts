import React from 'react';

export interface MinaCheckWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCheckWavesSolid(props: MinaCheckWavesSolidProps): React.ReactElement;
export default MinaCheckWavesSolid;
