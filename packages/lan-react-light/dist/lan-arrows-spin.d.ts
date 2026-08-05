import React from 'react';

export interface LanArrowsSpinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsSpin(props: LanArrowsSpinProps): React.ReactElement;
export default LanArrowsSpin;
