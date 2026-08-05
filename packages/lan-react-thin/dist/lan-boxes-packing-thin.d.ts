import React from 'react';

export interface LanBoxesPackingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxesPackingThin(props: LanBoxesPackingThinProps): React.ReactElement;
export default LanBoxesPackingThin;
