import React from 'react';

export interface LanSpinnerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpinner(props: LanSpinnerProps): React.ReactElement;
export default LanSpinner;
