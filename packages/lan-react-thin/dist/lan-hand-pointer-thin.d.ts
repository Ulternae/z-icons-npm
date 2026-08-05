import React from 'react';

export interface LanHandPointerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPointerThin(props: LanHandPointerThinProps): React.ReactElement;
export default LanHandPointerThin;
