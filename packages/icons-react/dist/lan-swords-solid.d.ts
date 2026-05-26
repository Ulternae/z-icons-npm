import React from 'react';

export interface LanSwordsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwordsSolid: React.FC<LanSwordsSolidProps>;
export default LanSwordsSolid;
