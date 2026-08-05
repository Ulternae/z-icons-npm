import React from 'react';

export interface LanSpinnerThirdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpinnerThird(props: LanSpinnerThirdProps): React.ReactElement;
export default LanSpinnerThird;
