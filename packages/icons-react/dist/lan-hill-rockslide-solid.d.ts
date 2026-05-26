import React from 'react';

export interface LanHillRockslideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHillRockslideSolid: React.FC<LanHillRockslideSolidProps>;
export default LanHillRockslideSolid;
