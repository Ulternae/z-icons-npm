import React from 'react';

export interface BruMandalorianProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruMandalorian: React.FC<BruMandalorianProps>;
export default BruMandalorian;
