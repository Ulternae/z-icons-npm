import React from 'react';

export interface MinaShieldCrossedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShieldCrossed: React.FC<MinaShieldCrossedProps>;
export default MinaShieldCrossed;
