import React from 'react';

export interface NeoMobileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoMobile: React.FC<NeoMobileProps>;
export default NeoMobile;
