import React from 'react';

export interface LanCommentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanComment: React.FC<LanCommentProps>;
export default LanComment;
