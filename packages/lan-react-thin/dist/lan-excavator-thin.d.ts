import React from 'react';

export interface LanExcavatorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanExcavatorThin(props: LanExcavatorThinProps): React.ReactElement;
export default LanExcavatorThin;
