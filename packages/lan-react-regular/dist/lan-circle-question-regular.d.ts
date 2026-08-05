import React from 'react';

export interface LanCircleQuestionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleQuestionRegular(props: LanCircleQuestionRegularProps): React.ReactElement;
export default LanCircleQuestionRegular;
