import React from 'react';

export interface MinaVolumeMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaVolumeMinus(props: MinaVolumeMinusProps): React.ReactElement;
export default MinaVolumeMinus;
