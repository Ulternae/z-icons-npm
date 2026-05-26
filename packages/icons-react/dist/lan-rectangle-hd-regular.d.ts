import React from 'react';

export interface LanRectangleHdRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleHdRegular: React.FC<LanRectangleHdRegularProps>;
export default LanRectangleHdRegular;
