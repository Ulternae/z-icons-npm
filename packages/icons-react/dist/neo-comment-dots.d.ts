import React from 'react';

export interface NeoCommentDotsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCommentDots: React.FC<NeoCommentDotsProps>;
export default NeoCommentDots;
