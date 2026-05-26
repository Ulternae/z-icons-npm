import React from 'react';

export interface LanClipboardQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardQuestionSolid: React.FC<LanClipboardQuestionSolidProps>;
export default LanClipboardQuestionSolid;
