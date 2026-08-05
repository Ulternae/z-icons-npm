import React from 'react';

export interface LanArrowsUpDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsUpDown(props: LanArrowsUpDownProps): React.ReactElement;
export default LanArrowsUpDown;
