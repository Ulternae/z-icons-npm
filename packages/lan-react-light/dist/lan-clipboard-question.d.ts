import React from 'react';

export interface LanClipboardQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardQuestion(props: LanClipboardQuestionProps): React.ReactElement;
export default LanClipboardQuestion;
