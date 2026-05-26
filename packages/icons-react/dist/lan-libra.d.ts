import React from 'react';

export interface LanLibraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLibra: React.FC<LanLibraProps>;
export default LanLibra;
