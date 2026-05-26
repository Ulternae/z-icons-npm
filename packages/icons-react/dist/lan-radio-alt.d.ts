import React from 'react';

export interface LanRadioAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRadioAlt: React.FC<LanRadioAltProps>;
export default LanRadioAlt;
