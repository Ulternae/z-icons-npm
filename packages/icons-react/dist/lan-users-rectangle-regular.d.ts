import React from 'react';

export interface LanUsersRectangleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersRectangleRegular: React.FC<LanUsersRectangleRegularProps>;
export default LanUsersRectangleRegular;
