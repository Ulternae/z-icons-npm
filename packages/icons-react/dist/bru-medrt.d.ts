import React from 'react';

export interface BruMedrtProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruMedrt: React.FC<BruMedrtProps>;
export default BruMedrt;
