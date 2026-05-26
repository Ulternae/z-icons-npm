import React from 'react';

export interface LanQProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanQ: React.FC<LanQProps>;
export default LanQ;
