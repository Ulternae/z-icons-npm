import React from 'react';

export interface LanRepeatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRepeatThin(props: LanRepeatThinProps): React.ReactElement;
export default LanRepeatThin;
