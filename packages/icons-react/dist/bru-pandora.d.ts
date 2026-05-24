import React from 'react';

export interface BruPandoraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruPandora: React.FC<BruPandoraProps>;
export default BruPandora;
