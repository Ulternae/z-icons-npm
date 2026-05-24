import React from 'react';

export interface BruMicroblogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruMicroblog: React.FC<BruMicroblogProps>;
export default BruMicroblog;
