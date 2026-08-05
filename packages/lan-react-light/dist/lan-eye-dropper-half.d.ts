import React from 'react';

export interface LanEyeDropperHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEyeDropperHalf(props: LanEyeDropperHalfProps): React.ReactElement;
export default LanEyeDropperHalf;
