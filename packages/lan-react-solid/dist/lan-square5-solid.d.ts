import React from 'react';

export interface LanSquare5SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquare5Solid(props: LanSquare5SolidProps): React.ReactElement;
export default LanSquare5Solid;
