import React from 'react';

export interface LanRulerTriangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRulerTriangle(props: LanRulerTriangleProps): React.ReactElement;
export default LanRulerTriangle;
