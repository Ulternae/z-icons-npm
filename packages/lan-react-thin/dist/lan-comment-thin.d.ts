import React from 'react';

export interface LanCommentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentThin(props: LanCommentThinProps): React.ReactElement;
export default LanCommentThin;
