import React from 'react';

export interface LanTriangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTriangle(props: LanTriangleProps): React.ReactElement;
export default LanTriangle;
