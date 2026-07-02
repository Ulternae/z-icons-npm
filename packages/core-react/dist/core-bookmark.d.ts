import React from 'react';

export interface CoreBookmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBookmark(props: CoreBookmarkProps): React.ReactElement;
export default CoreBookmark;
