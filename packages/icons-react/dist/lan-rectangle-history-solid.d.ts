import React from 'react';

export interface LanRectangleHistorySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleHistorySolid: React.FC<LanRectangleHistorySolidProps>;
export default LanRectangleHistorySolid;
