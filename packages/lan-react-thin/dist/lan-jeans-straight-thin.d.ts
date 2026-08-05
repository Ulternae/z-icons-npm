import React from 'react';

export interface LanJeansStraightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJeansStraightThin(props: LanJeansStraightThinProps): React.ReactElement;
export default LanJeansStraightThin;
