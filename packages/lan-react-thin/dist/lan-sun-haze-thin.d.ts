import React from 'react';

export interface LanSunHazeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunHazeThin(props: LanSunHazeThinProps): React.ReactElement;
export default LanSunHazeThin;
