import React from 'react';

export interface LanCommentLinesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentLinesThin(props: LanCommentLinesThinProps): React.ReactElement;
export default LanCommentLinesThin;
