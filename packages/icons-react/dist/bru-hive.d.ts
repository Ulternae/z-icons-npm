import React from 'react';

export interface BruHiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruHive: React.FC<BruHiveProps>;
export default BruHive;
