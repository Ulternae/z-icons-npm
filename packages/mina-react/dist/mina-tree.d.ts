import React from 'react';

export interface MinaTreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTree(props: MinaTreeProps): React.ReactElement;
export default MinaTree;
