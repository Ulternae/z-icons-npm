import React from 'react';

export interface LanCommentQuoteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentQuoteSolid: React.FC<LanCommentQuoteSolidProps>;
export default LanCommentQuoteSolid;
