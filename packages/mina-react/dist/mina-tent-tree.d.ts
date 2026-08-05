import React from 'react';

export interface MinaTentTreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTentTree(props: MinaTentTreeProps): React.ReactElement;
export default MinaTentTree;
