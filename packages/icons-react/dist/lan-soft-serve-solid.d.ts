import React from 'react';

export interface LanSoftServeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSoftServeSolid: React.FC<LanSoftServeSolidProps>;
export default LanSoftServeSolid;
