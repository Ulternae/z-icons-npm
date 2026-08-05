import React from 'react';

export interface LanSpinnerScaleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpinnerScale(props: LanSpinnerScaleProps): React.ReactElement;
export default LanSpinnerScale;
