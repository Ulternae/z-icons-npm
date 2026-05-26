import React from 'react';

export interface LanRectangleHdSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleHdSolid: React.FC<LanRectangleHdSolidProps>;
export default LanRectangleHdSolid;
