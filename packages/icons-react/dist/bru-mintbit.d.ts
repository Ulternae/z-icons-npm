import React from 'react';

export interface BruMintbitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruMintbit: React.FC<BruMintbitProps>;
export default BruMintbit;
