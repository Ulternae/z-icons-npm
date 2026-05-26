import React from 'react';

export interface LanCommentTextProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentText: React.FC<LanCommentTextProps>;
export default LanCommentText;
