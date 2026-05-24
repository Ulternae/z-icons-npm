import React from 'react';

export interface BruApperProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruApper: React.FC<BruApperProps>;
export default BruApper;
