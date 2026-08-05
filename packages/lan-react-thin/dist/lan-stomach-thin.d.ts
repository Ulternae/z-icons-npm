import React from 'react';

export interface LanStomachThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStomachThin(props: LanStomachThinProps): React.ReactElement;
export default LanStomachThin;
