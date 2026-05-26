import React from 'react';

export interface LanCommentSmileThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentSmileThin: React.FC<LanCommentSmileThinProps>;
export default LanCommentSmileThin;
