import React from 'react';

export interface LanUsersRectangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersRectangle: React.FC<LanUsersRectangleProps>;
export default LanUsersRectangle;
