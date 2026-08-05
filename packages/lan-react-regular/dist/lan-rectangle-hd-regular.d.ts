import React from 'react';

export interface LanRectangleHdRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleHdRegular(props: LanRectangleHdRegularProps): React.ReactElement;
export default LanRectangleHdRegular;
