import React from 'react';

export interface LanMountainsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMountains: React.FC<LanMountainsProps>;
export default LanMountains;
