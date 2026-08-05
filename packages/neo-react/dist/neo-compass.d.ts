import React from 'react';

export interface NeoCompassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCompass(props: NeoCompassProps): React.ReactElement;
export default NeoCompass;
