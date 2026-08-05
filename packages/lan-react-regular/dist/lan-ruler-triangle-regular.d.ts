import React from 'react';

export interface LanRulerTriangleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRulerTriangleRegular(props: LanRulerTriangleRegularProps): React.ReactElement;
export default LanRulerTriangleRegular;
