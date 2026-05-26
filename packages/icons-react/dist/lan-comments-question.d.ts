import React from 'react';

export interface LanCommentsQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentsQuestion: React.FC<LanCommentsQuestionProps>;
export default LanCommentsQuestion;
