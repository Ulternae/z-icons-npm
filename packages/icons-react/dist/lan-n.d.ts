import React from 'react';

export interface LanNProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanN: React.FC<LanNProps>;
export default LanN;
