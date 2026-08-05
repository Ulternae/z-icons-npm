import React from 'react';

export interface LanPantsStraightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPantsStraight(props: LanPantsStraightProps): React.ReactElement;
export default LanPantsStraight;
