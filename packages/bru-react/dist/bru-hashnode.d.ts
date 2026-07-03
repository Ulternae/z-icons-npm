import React from 'react';

export interface BruHashnodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruHashnode(props: BruHashnodeProps): React.ReactElement;
export default BruHashnode;
