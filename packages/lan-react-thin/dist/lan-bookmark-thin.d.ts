import React from 'react';

export interface LanBookmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookmarkThin(props: LanBookmarkThinProps): React.ReactElement;
export default LanBookmarkThin;
