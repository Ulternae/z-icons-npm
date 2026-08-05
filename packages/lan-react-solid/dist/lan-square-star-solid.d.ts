import React from 'react';

export interface LanSquareStarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareStarSolid(props: LanSquareStarSolidProps): React.ReactElement;
export default LanSquareStarSolid;
