import React from 'react';

export interface LanFileOdfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileOdf: React.FC<LanFileOdfProps>;
export default LanFileOdf;
