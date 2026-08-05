import React from 'react';

export interface MinaBookmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookmark(props: MinaBookmarkProps): React.ReactElement;
export default MinaBookmark;
