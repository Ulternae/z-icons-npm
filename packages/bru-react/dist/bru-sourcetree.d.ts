import React from 'react';

export interface BruSourcetreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSourcetree(props: BruSourcetreeProps): React.ReactElement;
export default BruSourcetree;
