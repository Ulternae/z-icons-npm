import React from 'react';

export interface LanFlaskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlask: React.FC<LanFlaskProps>;
export default LanFlask;
