import React from 'react';

export interface MinaCompassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCompassSolid: React.FC<MinaCompassSolidProps>;
export default MinaCompassSolid;
