import React from 'react';

export interface LanMessageQuestionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageQuestionRegular(props: LanMessageQuestionRegularProps): React.ReactElement;
export default LanMessageQuestionRegular;
