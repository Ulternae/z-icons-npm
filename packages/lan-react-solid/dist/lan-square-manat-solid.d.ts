import React from 'react';

export interface LanSquareManatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareManatSolid(props: LanSquareManatSolidProps): React.ReactElement;
export default LanSquareManatSolid;
