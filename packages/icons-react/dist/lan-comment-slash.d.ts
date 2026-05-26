import React from 'react';

export interface LanCommentSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentSlash: React.FC<LanCommentSlashProps>;
export default LanCommentSlash;
