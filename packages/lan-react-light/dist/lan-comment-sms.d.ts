import React from 'react';

export interface LanCommentSmsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentSms(props: LanCommentSmsProps): React.ReactElement;
export default LanCommentSms;
