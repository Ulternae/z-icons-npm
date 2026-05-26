import React from 'react';

export interface LanHippoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHippo: React.FC<LanHippoProps>;
export default LanHippo;
