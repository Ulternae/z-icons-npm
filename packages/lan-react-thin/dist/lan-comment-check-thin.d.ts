import React from 'react';

export interface LanCommentCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentCheckThin(props: LanCommentCheckThinProps): React.ReactElement;
export default LanCommentCheckThin;
