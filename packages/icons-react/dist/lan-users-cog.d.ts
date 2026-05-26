import React from 'react';

export interface LanUsersCogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersCog: React.FC<LanUsersCogProps>;
export default LanUsersCog;
