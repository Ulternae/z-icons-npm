import React from 'react';

export interface LanSunglassesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunglassesThin(props: LanSunglassesThinProps): React.ReactElement;
export default LanSunglassesThin;
