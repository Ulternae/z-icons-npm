import React from 'react';

export interface LanSealQuestionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSealQuestionRegular(props: LanSealQuestionRegularProps): React.ReactElement;
export default LanSealQuestionRegular;
