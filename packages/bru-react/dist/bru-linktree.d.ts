import React from 'react';

export interface BruLinktreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruLinktree(props: BruLinktreeProps): React.ReactElement;
export default BruLinktree;
