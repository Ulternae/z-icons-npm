import React from 'react';

export interface LanCommentCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentCode: React.FC<LanCommentCodeProps>;
export default LanCommentCode;
