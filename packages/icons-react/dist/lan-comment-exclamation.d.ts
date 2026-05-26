import React from 'react';

export interface LanCommentExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentExclamation: React.FC<LanCommentExclamationProps>;
export default LanCommentExclamation;
