import React from 'react';

export interface LanCommentAltImageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentAltImageThin(props: LanCommentAltImageThinProps): React.ReactElement;
export default LanCommentAltImageThin;
