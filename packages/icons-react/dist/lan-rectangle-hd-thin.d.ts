import React from 'react';

export interface LanRectangleHdThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleHdThin: React.FC<LanRectangleHdThinProps>;
export default LanRectangleHdThin;
