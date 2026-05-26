import React from 'react';

export interface LanKazooProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKazoo: React.FC<LanKazooProps>;
export default LanKazoo;
