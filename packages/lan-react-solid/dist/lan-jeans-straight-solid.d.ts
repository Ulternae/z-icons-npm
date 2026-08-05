import React from 'react';

export interface LanJeansStraightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJeansStraightSolid(props: LanJeansStraightSolidProps): React.ReactElement;
export default LanJeansStraightSolid;
