import React from 'react';

export interface LanVideoQuestionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVideoQuestionRegular(props: LanVideoQuestionRegularProps): React.ReactElement;
export default LanVideoQuestionRegular;
