import React from 'react';

export interface CoreShareNodesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreShareNodes(props: CoreShareNodesProps): React.ReactElement;
export default CoreShareNodes;
