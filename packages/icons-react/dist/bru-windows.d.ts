import React from 'react';

export interface BruWindowsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruWindows: React.FC<BruWindowsProps>;
export default BruWindows;
