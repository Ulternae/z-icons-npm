import React from 'react';

export interface LanHillRockslideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHillRockslideThin: React.FC<LanHillRockslideThinProps>;
export default LanHillRockslideThin;
