import React from 'react';

export interface LanPawProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaw: React.FC<LanPawProps>;
export default LanPaw;
