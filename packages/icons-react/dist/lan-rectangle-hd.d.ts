import React from 'react';

export interface LanRectangleHdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleHd: React.FC<LanRectangleHdProps>;
export default LanRectangleHd;
