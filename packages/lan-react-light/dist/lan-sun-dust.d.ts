import React from 'react';

export interface LanSunDustProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunDust(props: LanSunDustProps): React.ReactElement;
export default LanSunDust;
