import React from 'react';

export interface LanCogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCog: React.FC<LanCogProps>;
export default LanCog;
