import React from 'react';

export interface LanCogsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCogsThin: React.FC<LanCogsThinProps>;
export default LanCogsThin;
