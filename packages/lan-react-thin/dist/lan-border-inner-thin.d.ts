import React from 'react';

export interface LanBorderInnerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderInnerThin(props: LanBorderInnerThinProps): React.ReactElement;
export default LanBorderInnerThin;
