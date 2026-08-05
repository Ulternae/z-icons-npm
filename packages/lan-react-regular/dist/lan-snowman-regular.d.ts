import React from 'react';

export interface LanSnowmanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnowmanRegular(props: LanSnowmanRegularProps): React.ReactElement;
export default LanSnowmanRegular;
