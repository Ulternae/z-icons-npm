import React from 'react';

export interface LanBookBookmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookBookmark(props: LanBookBookmarkProps): React.ReactElement;
export default LanBookBookmark;
