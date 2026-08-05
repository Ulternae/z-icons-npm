import React from 'react';

export interface LanCompassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCompass(props: LanCompassProps): React.ReactElement;
export default LanCompass;
