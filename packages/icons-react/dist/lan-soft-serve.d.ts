import React from 'react';

export interface LanSoftServeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSoftServe: React.FC<LanSoftServeProps>;
export default LanSoftServe;
