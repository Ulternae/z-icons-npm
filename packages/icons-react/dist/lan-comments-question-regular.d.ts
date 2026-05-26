import React from 'react';

export interface LanCommentsQuestionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentsQuestionRegular: React.FC<LanCommentsQuestionRegularProps>;
export default LanCommentsQuestionRegular;
