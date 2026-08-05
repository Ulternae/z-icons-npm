import React from 'react';

export interface LanRectangleMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleMinus(props: LanRectangleMinusProps): React.ReactElement;
export default LanRectangleMinus;
