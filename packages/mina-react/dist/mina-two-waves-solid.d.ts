import React from 'react';

export interface MinaTwoWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTwoWavesSolid(props: MinaTwoWavesSolidProps): React.ReactElement;
export default MinaTwoWavesSolid;
