import React from 'react';

export interface LanClipboardQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardQuestionThin: React.FC<LanClipboardQuestionThinProps>;
export default LanClipboardQuestionThin;
