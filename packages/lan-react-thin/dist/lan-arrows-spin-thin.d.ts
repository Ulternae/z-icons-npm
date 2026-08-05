import React from 'react';

export interface LanArrowsSpinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsSpinThin(props: LanArrowsSpinThinProps): React.ReactElement;
export default LanArrowsSpinThin;
