import React from 'react';

export interface LanSlidersHThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlidersHThin(props: LanSlidersHThinProps): React.ReactElement;
export default LanSlidersHThin;
