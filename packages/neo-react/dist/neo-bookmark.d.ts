import React from 'react';

export interface NeoBookmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBookmark(props: NeoBookmarkProps): React.ReactElement;
export default NeoBookmark;
