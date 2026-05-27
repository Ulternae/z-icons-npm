import React from 'react';

export interface CoreLeafProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLeaf: React.FC<CoreLeafProps>;
export default CoreLeaf;
