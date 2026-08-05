import React from 'react';

export interface LanFillDripThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFillDripThin(props: LanFillDripThinProps): React.ReactElement;
export default LanFillDripThin;
