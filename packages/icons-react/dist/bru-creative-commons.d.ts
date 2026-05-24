import React from 'react';

export interface BruCreativeCommonsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCreativeCommons: React.FC<BruCreativeCommonsProps>;
export default BruCreativeCommons;
