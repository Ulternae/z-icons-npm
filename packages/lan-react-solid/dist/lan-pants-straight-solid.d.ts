import React from 'react';

export interface LanPantsStraightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPantsStraightSolid(props: LanPantsStraightSolidProps): React.ReactElement;
export default LanPantsStraightSolid;
