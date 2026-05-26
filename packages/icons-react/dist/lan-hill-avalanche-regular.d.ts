import React from 'react';

export interface LanHillAvalancheRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHillAvalancheRegular: React.FC<LanHillAvalancheRegularProps>;
export default LanHillAvalancheRegular;
