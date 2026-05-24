import React from 'react';

export interface BruArchLinuxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruArchLinux: React.FC<BruArchLinuxProps>;
export default BruArchLinux;
