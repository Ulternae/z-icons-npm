import React from 'react';

export interface LanCommentQuoteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentQuoteThin: React.FC<LanCommentQuoteThinProps>;
export default LanCommentQuoteThin;
