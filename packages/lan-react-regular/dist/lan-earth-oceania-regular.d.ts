import React from 'react';

export interface LanEarthOceaniaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEarthOceaniaRegular(props: LanEarthOceaniaRegularProps): React.ReactElement;
export default LanEarthOceaniaRegular;
