import React from 'react';

export interface LanCommentAltLinesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentAltLines: React.FC<LanCommentAltLinesProps>;
export default LanCommentAltLines;
