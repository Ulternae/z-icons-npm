import React from 'react';

export interface MinaUserWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUserWavesSolid: React.FC<MinaUserWavesSolidProps>;
export default MinaUserWavesSolid;
