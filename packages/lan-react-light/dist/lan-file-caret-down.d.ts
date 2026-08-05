import React from 'react';

export interface LanFileCaretDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCaretDown(props: LanFileCaretDownProps): React.ReactElement;
export default LanFileCaretDown;
