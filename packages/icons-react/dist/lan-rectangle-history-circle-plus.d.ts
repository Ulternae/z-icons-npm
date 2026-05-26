import React from 'react';

export interface LanRectangleHistoryCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleHistoryCirclePlus: React.FC<LanRectangleHistoryCirclePlusProps>;
export default LanRectangleHistoryCirclePlus;
