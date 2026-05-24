import React from 'react';

export interface BruObsidianProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruObsidian: React.FC<BruObsidianProps>;
export default BruObsidian;
