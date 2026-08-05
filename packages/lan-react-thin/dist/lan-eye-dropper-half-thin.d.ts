import React from 'react';

export interface LanEyeDropperHalfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEyeDropperHalfThin(props: LanEyeDropperHalfThinProps): React.ReactElement;
export default LanEyeDropperHalfThin;
