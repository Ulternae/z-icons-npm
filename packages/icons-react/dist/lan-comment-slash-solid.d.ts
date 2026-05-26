import React from 'react';

export interface LanCommentSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentSlashSolid: React.FC<LanCommentSlashSolidProps>;
export default LanCommentSlashSolid;
