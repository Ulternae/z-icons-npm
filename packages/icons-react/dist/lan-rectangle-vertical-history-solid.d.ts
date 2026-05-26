import React from 'react';

export interface LanRectangleVerticalHistorySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleVerticalHistorySolid: React.FC<LanRectangleVerticalHistorySolidProps>;
export default LanRectangleVerticalHistorySolid;
