import React from 'react';

export interface LanQuestionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanQuestionRegular(props: LanQuestionRegularProps): React.ReactElement;
export default LanQuestionRegular;
