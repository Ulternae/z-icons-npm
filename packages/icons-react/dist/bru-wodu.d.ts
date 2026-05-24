import React from 'react';

export interface BruWoduProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruWodu: React.FC<BruWoduProps>;
export default BruWodu;
