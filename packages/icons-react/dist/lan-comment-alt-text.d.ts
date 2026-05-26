import React from 'react';

export interface LanCommentAltTextProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentAltText: React.FC<LanCommentAltTextProps>;
export default LanCommentAltText;
