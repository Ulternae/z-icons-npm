import React from 'react';

export interface MinaRocketSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRocketSolid: React.FC<MinaRocketSolidProps>;
export default MinaRocketSolid;
