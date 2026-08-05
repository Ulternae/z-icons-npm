import React from 'react';

export interface LanSpinnerScaleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpinnerScaleThin(props: LanSpinnerScaleThinProps): React.ReactElement;
export default LanSpinnerScaleThin;
