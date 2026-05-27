import React from 'react';

export interface CoreShieldCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreShieldCheck: React.FC<CoreShieldCheckProps>;
export default CoreShieldCheck;
