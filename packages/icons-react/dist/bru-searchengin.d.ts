import React from 'react';

export interface BruSearchenginProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSearchengin: React.FC<BruSearchenginProps>;
export default BruSearchengin;
