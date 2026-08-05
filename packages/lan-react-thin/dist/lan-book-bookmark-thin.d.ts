import React from 'react';

export interface LanBookBookmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookBookmarkThin(props: LanBookBookmarkThinProps): React.ReactElement;
export default LanBookBookmarkThin;
