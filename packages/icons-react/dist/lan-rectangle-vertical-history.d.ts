import React from 'react';

export interface LanRectangleVerticalHistoryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleVerticalHistory: React.FC<LanRectangleVerticalHistoryProps>;
export default LanRectangleVerticalHistory;
