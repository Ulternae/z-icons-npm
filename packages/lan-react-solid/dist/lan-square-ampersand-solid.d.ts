import React from 'react';

export interface LanSquareAmpersandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareAmpersandSolid(props: LanSquareAmpersandSolidProps): React.ReactElement;
export default LanSquareAmpersandSolid;
