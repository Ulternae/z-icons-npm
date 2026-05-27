import React from 'react';

export interface NeoCommentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoComment: React.FC<NeoCommentProps>;
export default NeoComment;
