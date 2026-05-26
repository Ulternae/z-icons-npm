import React from 'react';

export interface LanCommentSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentSlashThin: React.FC<LanCommentSlashThinProps>;
export default LanCommentSlashThin;
