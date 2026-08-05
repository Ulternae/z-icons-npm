import React from 'react';

export interface LanSlidersVThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlidersVThin(props: LanSlidersVThinProps): React.ReactElement;
export default LanSlidersVThin;
