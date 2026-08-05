import React from 'react';

export interface LanCommentImageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentImageThin(props: LanCommentImageThinProps): React.ReactElement;
export default LanCommentImageThin;
