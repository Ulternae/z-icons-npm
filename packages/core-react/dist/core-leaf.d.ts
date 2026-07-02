import React from 'react';

export interface CoreLeafProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLeaf(props: CoreLeafProps): React.ReactElement;
export default CoreLeaf;
