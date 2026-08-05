import React from 'react';

export interface LanPersonWavingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonWavingThin(props: LanPersonWavingThinProps): React.ReactElement;
export default LanPersonWavingThin;
