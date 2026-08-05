import React from 'react';

export interface LanUpDownLeftRightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUpDownLeftRightThin(props: LanUpDownLeftRightThinProps): React.ReactElement;
export default LanUpDownLeftRightThin;
