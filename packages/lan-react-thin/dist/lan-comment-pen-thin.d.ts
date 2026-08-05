import React from 'react';

export interface LanCommentPenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentPenThin(props: LanCommentPenThinProps): React.ReactElement;
export default LanCommentPenThin;
