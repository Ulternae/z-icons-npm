import React from 'react';

export interface LanBreadLoafProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBreadLoaf: React.FC<LanBreadLoafProps>;
export default LanBreadLoaf;
