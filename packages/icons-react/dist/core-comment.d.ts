import React from 'react';

export interface CoreCommentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreComment: React.FC<CoreCommentProps>;
export default CoreComment;
