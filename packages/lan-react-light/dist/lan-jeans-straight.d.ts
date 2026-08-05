import React from 'react';

export interface LanJeansStraightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJeansStraight(props: LanJeansStraightProps): React.ReactElement;
export default LanJeansStraight;
