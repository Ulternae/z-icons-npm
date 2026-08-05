import React from 'react';

export interface LanTireRuggedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTireRuggedThin(props: LanTireRuggedThinProps): React.ReactElement;
export default LanTireRuggedThin;
