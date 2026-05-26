import React from 'react';

export interface LanBulldozerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBulldozer: React.FC<LanBulldozerProps>;
export default LanBulldozer;
