import React from 'react';

export interface BruCreativeCommonsByProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCreativeCommonsBy: React.FC<BruCreativeCommonsByProps>;
export default BruCreativeCommonsBy;
