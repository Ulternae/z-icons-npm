import React from 'react';

export interface LanClipboardQuestionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardQuestionThin(props: LanClipboardQuestionThinProps): React.ReactElement;
export default LanClipboardQuestionThin;
