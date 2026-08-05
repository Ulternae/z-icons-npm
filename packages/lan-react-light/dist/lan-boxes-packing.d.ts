import React from 'react';

export interface LanBoxesPackingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxesPacking(props: LanBoxesPackingProps): React.ReactElement;
export default LanBoxesPacking;
