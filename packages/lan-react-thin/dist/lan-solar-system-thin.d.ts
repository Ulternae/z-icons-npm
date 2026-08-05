import React from 'react';

export interface LanSolarSystemThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSolarSystemThin(props: LanSolarSystemThinProps): React.ReactElement;
export default LanSolarSystemThin;
