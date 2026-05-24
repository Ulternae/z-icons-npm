import React from 'react';

export interface BruLinuxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruLinux: React.FC<BruLinuxProps>;
export default BruLinux;
