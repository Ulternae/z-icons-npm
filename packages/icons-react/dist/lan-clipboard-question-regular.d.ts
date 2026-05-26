import React from 'react';

export interface LanClipboardQuestionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardQuestionRegular: React.FC<LanClipboardQuestionRegularProps>;
export default LanClipboardQuestionRegular;
