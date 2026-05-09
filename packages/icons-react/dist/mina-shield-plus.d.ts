import React from 'react';

export interface MinaShieldPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShieldPlus: React.FC<MinaShieldPlusProps>;
export default MinaShieldPlus;
