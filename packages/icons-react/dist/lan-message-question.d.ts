import React from 'react';

export interface LanMessageQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageQuestion: React.FC<LanMessageQuestionProps>;
export default LanMessageQuestion;
