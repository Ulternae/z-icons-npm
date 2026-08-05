import React from 'react';

export interface LanPersonBoothThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonBoothThin(props: LanPersonBoothThinProps): React.ReactElement;
export default LanPersonBoothThin;
