import React from 'react';

export interface LanCommentPenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentPen: React.FC<LanCommentPenProps>;
export default LanCommentPen;
