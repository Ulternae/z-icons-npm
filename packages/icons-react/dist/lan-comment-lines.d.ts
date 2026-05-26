import React from 'react';

export interface LanCommentLinesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentLines: React.FC<LanCommentLinesProps>;
export default LanCommentLines;
