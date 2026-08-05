import React from 'react';

export interface LanSquare9SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquare9Solid(props: LanSquare9SolidProps): React.ReactElement;
export default LanSquare9Solid;
