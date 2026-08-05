import React from 'react';

export interface LanSquareNfiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareNfiSolid(props: LanSquareNfiSolidProps): React.ReactElement;
export default LanSquareNfiSolid;
