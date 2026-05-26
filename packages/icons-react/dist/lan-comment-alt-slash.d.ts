import React from 'react';

export interface LanCommentAltSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentAltSlash: React.FC<LanCommentAltSlashProps>;
export default LanCommentAltSlash;
