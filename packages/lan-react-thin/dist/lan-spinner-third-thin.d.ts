import React from 'react';

export interface LanSpinnerThirdThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpinnerThirdThin(props: LanSpinnerThirdThinProps): React.ReactElement;
export default LanSpinnerThirdThin;
