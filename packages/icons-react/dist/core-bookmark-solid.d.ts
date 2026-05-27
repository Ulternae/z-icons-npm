import React from 'react';

export interface CoreBookmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBookmarkSolid: React.FC<CoreBookmarkSolidProps>;
export default CoreBookmarkSolid;
