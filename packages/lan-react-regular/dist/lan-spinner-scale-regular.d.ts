import React from 'react';

export interface LanSpinnerScaleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpinnerScaleRegular(props: LanSpinnerScaleRegularProps): React.ReactElement;
export default LanSpinnerScaleRegular;
