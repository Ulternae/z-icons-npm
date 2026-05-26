import React from 'react';

export interface LanCommentsQuestionCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentsQuestionCheck: React.FC<LanCommentsQuestionCheckProps>;
export default LanCommentsQuestionCheck;
