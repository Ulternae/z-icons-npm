import React from 'react';

export interface LanPhoneLaptopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneLaptop: React.FC<LanPhoneLaptopProps>;
export default LanPhoneLaptop;
