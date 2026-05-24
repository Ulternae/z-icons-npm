import React from 'react';

export interface BruCreativeCommonsShareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCreativeCommonsShare: React.FC<BruCreativeCommonsShareProps>;
export default BruCreativeCommonsShare;
