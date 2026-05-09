import React from 'react';

export interface MinaShieldXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShieldX: React.FC<MinaShieldXProps>;
export default MinaShieldX;
