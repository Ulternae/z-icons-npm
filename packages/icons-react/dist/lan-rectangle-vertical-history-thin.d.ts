import React from 'react';

export interface LanRectangleVerticalHistoryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleVerticalHistoryThin: React.FC<LanRectangleVerticalHistoryThinProps>;
export default LanRectangleVerticalHistoryThin;
