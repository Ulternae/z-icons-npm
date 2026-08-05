import React from 'react';

export interface LanSquareFrancSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareFrancSolid(props: LanSquareFrancSolidProps): React.ReactElement;
export default LanSquareFrancSolid;
