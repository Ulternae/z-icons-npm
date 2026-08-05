import React from 'react';

export interface LanPersonHikingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonHikingRegular(props: LanPersonHikingRegularProps): React.ReactElement;
export default LanPersonHikingRegular;
