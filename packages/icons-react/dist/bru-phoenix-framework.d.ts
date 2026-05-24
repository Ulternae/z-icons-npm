import React from 'react';

export interface BruPhoenixFrameworkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruPhoenixFramework: React.FC<BruPhoenixFrameworkProps>;
export default BruPhoenixFramework;
