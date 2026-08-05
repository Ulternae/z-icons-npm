import React from 'react';

export interface LanRulerHorizontalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRulerHorizontalThin(props: LanRulerHorizontalThinProps): React.ReactElement;
export default LanRulerHorizontalThin;
