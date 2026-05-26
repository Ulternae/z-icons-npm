import React from 'react';

export interface LanCommentSmsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentSms: React.FC<LanCommentSmsProps>;
export default LanCommentSms;
