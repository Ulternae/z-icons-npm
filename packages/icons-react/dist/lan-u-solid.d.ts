import React from 'react';

export interface LanUSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUSolid: React.FC<LanUSolidProps>;
export default LanUSolid;
