import React from 'react';

export interface LanClipboardQuestionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardQuestionRegular(props: LanClipboardQuestionRegularProps): React.ReactElement;
export default LanClipboardQuestionRegular;
