import React from 'react';

export interface LanCommentCaptionsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentCaptionsThin(props: LanCommentCaptionsThinProps): React.ReactElement;
export default LanCommentCaptionsThin;
