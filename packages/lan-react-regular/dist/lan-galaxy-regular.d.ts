import React from 'react';

export interface LanGalaxyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGalaxyRegular(props: LanGalaxyRegularProps): React.ReactElement;
export default LanGalaxyRegular;
