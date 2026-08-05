import React from 'react';

export interface MinaCompassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCompass(props: MinaCompassProps): React.ReactElement;
export default MinaCompass;
