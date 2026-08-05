import React from 'react';

export interface LanBlockQuestionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlockQuestionRegular(props: LanBlockQuestionRegularProps): React.ReactElement;
export default LanBlockQuestionRegular;
