import React from 'react';

export interface BruNotionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruNotion: React.FC<BruNotionProps>;
export default BruNotion;
