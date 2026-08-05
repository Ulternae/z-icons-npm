import React from 'react';

export interface LanMessageQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageQuestion(props: LanMessageQuestionProps): React.ReactElement;
export default LanMessageQuestion;
