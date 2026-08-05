import React from 'react';

export interface LanUserQuestionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserQuestionRegular(props: LanUserQuestionRegularProps): React.ReactElement;
export default LanUserQuestionRegular;
