import React from 'react';

export interface LanRectangleHistoryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleHistoryThin: React.FC<LanRectangleHistoryThinProps>;
export default LanRectangleHistoryThin;
