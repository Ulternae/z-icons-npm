import React from 'react';

export interface LanUsersLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersLine: React.FC<LanUsersLineProps>;
export default LanUsersLine;
