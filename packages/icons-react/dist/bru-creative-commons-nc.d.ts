import React from 'react';

export interface BruCreativeCommonsNcProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCreativeCommonsNc: React.FC<BruCreativeCommonsNcProps>;
export default BruCreativeCommonsNc;
