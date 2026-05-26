import React from 'react';

export interface LanPeoplePullingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeoplePulling: React.FC<LanPeoplePullingProps>;
export default LanPeoplePulling;
