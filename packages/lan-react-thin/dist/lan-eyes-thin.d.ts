import React from 'react';

export interface LanEyesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEyesThin(props: LanEyesThinProps): React.ReactElement;
export default LanEyesThin;
