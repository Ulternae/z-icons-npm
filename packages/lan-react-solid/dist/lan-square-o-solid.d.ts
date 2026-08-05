import React from 'react';

export interface LanSquareOSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareOSolid(props: LanSquareOSolidProps): React.ReactElement;
export default LanSquareOSolid;
