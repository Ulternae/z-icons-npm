import React from 'react';

export interface CoreMobileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMobile: React.FC<CoreMobileProps>;
export default CoreMobile;
