import React from 'react';

export interface LanSlidersSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlidersSimpleThin(props: LanSlidersSimpleThinProps): React.ReactElement;
export default LanSlidersSimpleThin;
