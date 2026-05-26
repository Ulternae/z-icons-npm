import React from 'react';

export interface LanAngelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngel: React.FC<LanAngelProps>;
export default LanAngel;
