import React from 'react';

export interface MinaShieldXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShieldXSolid: React.FC<MinaShieldXSolidProps>;
export default MinaShieldXSolid;
