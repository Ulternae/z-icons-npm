import React from 'react';

export interface LanSpinnerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpinnerThin(props: LanSpinnerThinProps): React.ReactElement;
export default LanSpinnerThin;
