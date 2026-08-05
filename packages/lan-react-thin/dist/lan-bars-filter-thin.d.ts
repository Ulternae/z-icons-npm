import React from 'react';

export interface LanBarsFilterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarsFilterThin(props: LanBarsFilterThinProps): React.ReactElement;
export default LanBarsFilterThin;
