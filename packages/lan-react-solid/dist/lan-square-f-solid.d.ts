import React from 'react';

export interface LanSquareFSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareFSolid(props: LanSquareFSolidProps): React.ReactElement;
export default LanSquareFSolid;
