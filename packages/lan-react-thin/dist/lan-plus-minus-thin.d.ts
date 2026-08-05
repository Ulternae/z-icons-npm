import React from 'react';

export interface LanPlusMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlusMinusThin(props: LanPlusMinusThinProps): React.ReactElement;
export default LanPlusMinusThin;
