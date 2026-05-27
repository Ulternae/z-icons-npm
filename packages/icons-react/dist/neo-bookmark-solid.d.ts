import React from 'react';

export interface NeoBookmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBookmarkSolid: React.FC<NeoBookmarkSolidProps>;
export default NeoBookmarkSolid;
