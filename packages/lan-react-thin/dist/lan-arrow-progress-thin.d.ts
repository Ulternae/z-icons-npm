import React from 'react';

export interface LanArrowProgressThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowProgressThin(props: LanArrowProgressThinProps): React.ReactElement;
export default LanArrowProgressThin;
