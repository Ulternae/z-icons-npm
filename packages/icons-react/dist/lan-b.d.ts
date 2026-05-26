import React from 'react';

export interface LanBProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanB: React.FC<LanBProps>;
export default LanB;
