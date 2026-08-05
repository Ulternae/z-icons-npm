import React from 'react';

export interface LanMicrowaveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMicrowaveThin(props: LanMicrowaveThinProps): React.ReactElement;
export default LanMicrowaveThin;
