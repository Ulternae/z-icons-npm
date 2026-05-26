import React from 'react';

export interface LanClipboardQuestionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardQuestion: React.FC<LanClipboardQuestionProps>;
export default LanClipboardQuestion;
