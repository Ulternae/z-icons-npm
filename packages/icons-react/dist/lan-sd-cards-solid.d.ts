import React from 'react';

export interface LanSdCardsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSdCardsSolid: React.FC<LanSdCardsSolidProps>;
export default LanSdCardsSolid;
