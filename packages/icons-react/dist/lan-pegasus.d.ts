import React from 'react';

export interface LanPegasusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPegasus: React.FC<LanPegasusProps>;
export default LanPegasus;
