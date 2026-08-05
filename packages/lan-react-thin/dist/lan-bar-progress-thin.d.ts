import React from 'react';

export interface LanBarProgressThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarProgressThin(props: LanBarProgressThinProps): React.ReactElement;
export default LanBarProgressThin;
