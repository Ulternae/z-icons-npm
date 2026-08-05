import React from 'react';

export interface LanSolarSystemRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSolarSystemRegular(props: LanSolarSystemRegularProps): React.ReactElement;
export default LanSolarSystemRegular;
