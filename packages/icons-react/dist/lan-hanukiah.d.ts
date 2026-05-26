import React from 'react';

export interface LanHanukiahProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHanukiah: React.FC<LanHanukiahProps>;
export default LanHanukiah;
