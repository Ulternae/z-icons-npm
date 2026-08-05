import React from 'react';

export interface LanSquare8SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquare8Solid(props: LanSquare8SolidProps): React.ReactElement;
export default LanSquare8Solid;
