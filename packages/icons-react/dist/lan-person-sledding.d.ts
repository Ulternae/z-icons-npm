import React from 'react';

export interface LanPersonSleddingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSledding: React.FC<LanPersonSleddingProps>;
export default LanPersonSledding;
