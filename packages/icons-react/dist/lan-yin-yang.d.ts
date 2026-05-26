import React from 'react';

export interface LanYinYangProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanYinYang: React.FC<LanYinYangProps>;
export default LanYinYang;
