import React from 'react';

export interface LanHorseshoeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHorseshoe: React.FC<LanHorseshoeProps>;
export default LanHorseshoe;
