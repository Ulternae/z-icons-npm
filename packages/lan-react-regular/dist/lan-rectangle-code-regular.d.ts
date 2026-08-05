import React from 'react';

export interface LanRectangleCodeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleCodeRegular(props: LanRectangleCodeRegularProps): React.ReactElement;
export default LanRectangleCodeRegular;
