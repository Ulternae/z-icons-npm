import React from 'react';

export interface LanBookmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookmark(props: LanBookmarkProps): React.ReactElement;
export default LanBookmark;
