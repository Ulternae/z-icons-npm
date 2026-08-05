import React from 'react';

export interface LanCaretDownThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCaretDownThin(props: LanCaretDownThinProps): React.ReactElement;
export default LanCaretDownThin;
