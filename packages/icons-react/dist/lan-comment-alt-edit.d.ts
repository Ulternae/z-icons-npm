import React from 'react';

export interface LanCommentAltEditProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentAltEdit: React.FC<LanCommentAltEditProps>;
export default LanCommentAltEdit;
