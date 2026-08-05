import React from 'react';

export interface LanCaretDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCaretDown(props: LanCaretDownProps): React.ReactElement;
export default LanCaretDown;
