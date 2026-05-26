import React from 'react';

export interface LanBongProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBong: React.FC<LanBongProps>;
export default LanBong;
