import React from 'react';

export interface LanSquare4SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquare4Solid(props: LanSquare4SolidProps): React.ReactElement;
export default LanSquare4Solid;
