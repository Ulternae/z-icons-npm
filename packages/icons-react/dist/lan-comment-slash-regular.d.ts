import React from 'react';

export interface LanCommentSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentSlashRegular: React.FC<LanCommentSlashRegularProps>;
export default LanCommentSlashRegular;
