import React from 'react';

export interface LanButterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanButterSolid: React.FC<LanButterSolidProps>;
export default LanButterSolid;
