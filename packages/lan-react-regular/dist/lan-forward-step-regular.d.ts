import React from 'react';

export interface LanForwardStepRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanForwardStepRegular(props: LanForwardStepRegularProps): React.ReactElement;
export default LanForwardStepRegular;
