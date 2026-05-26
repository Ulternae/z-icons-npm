import React from 'react';

export interface LanCaretDownThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaretDownThin: React.FC<LanCaretDownThinProps>;
export default LanCaretDownThin;
