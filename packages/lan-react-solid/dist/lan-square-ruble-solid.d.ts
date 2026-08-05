import React from 'react';

export interface LanSquareRubleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareRubleSolid(props: LanSquareRubleSolidProps): React.ReactElement;
export default LanSquareRubleSolid;
