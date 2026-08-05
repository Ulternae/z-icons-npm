import React from 'react';

export interface LanCommentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanComment(props: LanCommentProps): React.ReactElement;
export default LanComment;
