import React from 'react';

export interface LanCannabisRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCannabisRegular(props: LanCannabisRegularProps): React.ReactElement;
export default LanCannabisRegular;
