import React from 'react';

export interface LanClipboardQuestionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClipboardQuestionSolid(props: LanClipboardQuestionSolidProps): React.ReactElement;
export default LanClipboardQuestionSolid;
