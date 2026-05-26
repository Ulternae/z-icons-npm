import React from 'react';

export interface LanBoomboxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoombox: React.FC<LanBoomboxProps>;
export default LanBoombox;
