import React from 'react';

export interface LanLeoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeo: React.FC<LanLeoProps>;
export default LanLeo;
