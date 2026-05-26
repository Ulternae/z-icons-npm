import React from 'react';

export interface LanListRadioProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListRadio: React.FC<LanListRadioProps>;
export default LanListRadio;
