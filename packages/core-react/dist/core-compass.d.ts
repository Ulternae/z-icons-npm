import React from 'react';

export interface CoreCompassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCompass(props: CoreCompassProps): React.ReactElement;
export default CoreCompass;
