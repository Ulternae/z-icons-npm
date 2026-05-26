import React from 'react';

export interface LanSocksProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSocks: React.FC<LanSocksProps>;
export default LanSocks;
