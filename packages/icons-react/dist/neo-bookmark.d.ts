import React from 'react';

export interface NeoBookmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBookmark: React.FC<NeoBookmarkProps>;
export default NeoBookmark;
