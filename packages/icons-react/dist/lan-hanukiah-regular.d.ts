import React from 'react';

export interface LanHanukiahRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHanukiahRegular: React.FC<LanHanukiahRegularProps>;
export default LanHanukiahRegular;
