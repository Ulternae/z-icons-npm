import React from 'react';

export interface LanRadarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRadarRegular(props: LanRadarRegularProps): React.ReactElement;
export default LanRadarRegular;
