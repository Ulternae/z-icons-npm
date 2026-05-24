import React from 'react';

export interface BruCashAppProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCashApp: React.FC<BruCashAppProps>;
export default BruCashApp;
