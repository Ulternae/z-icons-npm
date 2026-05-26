import React from 'react';

export interface LanPhoneLaptopThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneLaptopThin: React.FC<LanPhoneLaptopThinProps>;
export default LanPhoneLaptopThin;
