import React from 'react';

export interface LanBookmarkPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookmarkPlusThin(props: LanBookmarkPlusThinProps): React.ReactElement;
export default LanBookmarkPlusThin;
