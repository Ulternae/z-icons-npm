import React from 'react';

export interface LanUsersRaysProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersRays: React.FC<LanUsersRaysProps>;
export default LanUsersRays;
