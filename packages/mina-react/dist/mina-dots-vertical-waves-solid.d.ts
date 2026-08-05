import React from 'react';

export interface MinaDotsVerticalWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDotsVerticalWavesSolid(props: MinaDotsVerticalWavesSolidProps): React.ReactElement;
export default MinaDotsVerticalWavesSolid;
