import React from 'react';

export interface LanPhonePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhonePlus: React.FC<LanPhonePlusProps>;
export default LanPhonePlus;
