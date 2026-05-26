import React from 'react';

export interface LanUProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanU: React.FC<LanUProps>;
export default LanU;
