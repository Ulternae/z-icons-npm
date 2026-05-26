import React from 'react';

export interface LanBoomboxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoomboxSolid: React.FC<LanBoomboxSolidProps>;
export default LanBoomboxSolid;
