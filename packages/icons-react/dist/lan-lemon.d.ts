import React from 'react';

export interface LanLemonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLemon: React.FC<LanLemonProps>;
export default LanLemon;
