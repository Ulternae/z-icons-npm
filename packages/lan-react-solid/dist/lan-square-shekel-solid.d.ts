import React from 'react';

export interface LanSquareShekelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareShekelSolid(props: LanSquareShekelSolidProps): React.ReactElement;
export default LanSquareShekelSolid;
