import React from 'react';

export interface LanSteakThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSteakThin(props: LanSteakThinProps): React.ReactElement;
export default LanSteakThin;
