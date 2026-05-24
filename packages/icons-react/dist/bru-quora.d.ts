import React from 'react';

export interface BruQuoraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruQuora: React.FC<BruQuoraProps>;
export default BruQuora;
