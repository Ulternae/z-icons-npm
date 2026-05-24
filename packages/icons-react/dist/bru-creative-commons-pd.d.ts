import React from 'react';

export interface BruCreativeCommonsPdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCreativeCommonsPd: React.FC<BruCreativeCommonsPdProps>;
export default BruCreativeCommonsPd;
