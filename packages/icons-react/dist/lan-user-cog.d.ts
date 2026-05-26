import React from 'react';

export interface LanUserCogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserCog: React.FC<LanUserCogProps>;
export default LanUserCog;
