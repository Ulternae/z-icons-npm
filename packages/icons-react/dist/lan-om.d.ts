import React from 'react';

export interface LanOmProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOm: React.FC<LanOmProps>;
export default LanOm;
