import React from 'react';

export interface LanRectangleHistoryCircleUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleHistoryCircleUser: React.FC<LanRectangleHistoryCircleUserProps>;
export default LanRectangleHistoryCircleUser;
