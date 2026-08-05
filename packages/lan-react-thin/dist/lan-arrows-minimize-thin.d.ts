import React from 'react';

export interface LanArrowsMinimizeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsMinimizeThin(props: LanArrowsMinimizeThinProps): React.ReactElement;
export default LanArrowsMinimizeThin;
