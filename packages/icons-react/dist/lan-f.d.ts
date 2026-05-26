import React from 'react';

export interface LanFProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanF: React.FC<LanFProps>;
export default LanF;
