import React from 'react';

export interface LanRadioProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRadio: React.FC<LanRadioProps>;
export default LanRadio;
