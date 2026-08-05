import React from 'react';

export interface LanSquareCediSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareCediSolid(props: LanSquareCediSolidProps): React.ReactElement;
export default LanSquareCediSolid;
