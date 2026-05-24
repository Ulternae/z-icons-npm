import React from 'react';

export interface BruLinktreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruLinktree: React.FC<BruLinktreeProps>;
export default BruLinktree;
