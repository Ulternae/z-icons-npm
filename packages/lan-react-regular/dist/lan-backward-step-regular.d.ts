import React from 'react';

export interface LanBackwardStepRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBackwardStepRegular(props: LanBackwardStepRegularProps): React.ReactElement;
export default LanBackwardStepRegular;
