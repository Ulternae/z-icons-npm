import React from 'react';

export interface BruYammerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruYammer: React.FC<BruYammerProps>;
export default BruYammer;
