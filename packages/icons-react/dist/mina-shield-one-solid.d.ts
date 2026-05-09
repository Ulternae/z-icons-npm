import React from 'react';

export interface MinaShieldOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShieldOneSolid: React.FC<MinaShieldOneSolidProps>;
export default MinaShieldOneSolid;
