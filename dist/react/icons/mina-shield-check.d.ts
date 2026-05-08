import React from 'react';

export interface MinaShieldCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShieldCheck: React.FC<MinaShieldCheckProps>;
export default MinaShieldCheck;
