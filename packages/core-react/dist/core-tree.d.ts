import React from 'react';

export interface CoreTreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTree(props: CoreTreeProps): React.ReactElement;
export default CoreTree;
