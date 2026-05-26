import React from 'react';

export interface LanBathProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBath: React.FC<LanBathProps>;
export default LanBath;
