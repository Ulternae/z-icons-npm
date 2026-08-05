import React from 'react';

export interface LanSpinnerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpinnerRegular(props: LanSpinnerRegularProps): React.ReactElement;
export default LanSpinnerRegular;
