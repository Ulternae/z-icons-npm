import React from 'react';

export interface LanUserBeardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserBeard: React.FC<LanUserBeardProps>;
export default LanUserBeard;
