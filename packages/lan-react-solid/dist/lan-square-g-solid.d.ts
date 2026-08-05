import React from 'react';

export interface LanSquareGSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareGSolid(props: LanSquareGSolidProps): React.ReactElement;
export default LanSquareGSolid;
