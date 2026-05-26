import React from 'react';

export interface LanBahaiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBahai: React.FC<LanBahaiProps>;
export default LanBahai;
