import React from 'react';

export interface LanSlidersSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlidersSimple(props: LanSlidersSimpleProps): React.ReactElement;
export default LanSlidersSimple;
