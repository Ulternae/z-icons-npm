import React from 'react';

export interface LanArrowPointerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowPointerThin(props: LanArrowPointerThinProps): React.ReactElement;
export default LanArrowPointerThin;
