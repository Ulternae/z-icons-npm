import React from 'react';

export interface LanGlobeSnowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlobeSnowRegular(props: LanGlobeSnowRegularProps): React.ReactElement;
export default LanGlobeSnowRegular;
