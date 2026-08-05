import React from 'react';

export interface LanRectangleMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleMinusRegular(props: LanRectangleMinusRegularProps): React.ReactElement;
export default LanRectangleMinusRegular;
