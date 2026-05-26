import React from 'react';

export interface LanCurlingStoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCurlingStoneSolid: React.FC<LanCurlingStoneSolidProps>;
export default LanCurlingStoneSolid;
