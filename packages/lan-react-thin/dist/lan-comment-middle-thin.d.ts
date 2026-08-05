import React from 'react';

export interface LanCommentMiddleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentMiddleThin(props: LanCommentMiddleThinProps): React.ReactElement;
export default LanCommentMiddleThin;
