import React from 'react';

export interface LanSquare3SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquare3Solid(props: LanSquare3SolidProps): React.ReactElement;
export default LanSquare3Solid;
