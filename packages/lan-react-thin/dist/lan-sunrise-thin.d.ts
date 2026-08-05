import React from 'react';

export interface LanSunriseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunriseThin(props: LanSunriseThinProps): React.ReactElement;
export default LanSunriseThin;
