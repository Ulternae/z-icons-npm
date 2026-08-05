import React from 'react';

export interface LanEyeDropperFullThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEyeDropperFullThin(props: LanEyeDropperFullThinProps): React.ReactElement;
export default LanEyeDropperFullThin;
