import React from 'react';

export interface LanMountainsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMountainsRegular: React.FC<LanMountainsRegularProps>;
export default LanMountainsRegular;
