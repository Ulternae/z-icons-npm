import React from 'react';

export interface BruLumonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruLumon: React.FC<BruLumonProps>;
export default BruLumon;
