import React from 'react';

export interface MinaVolumeHighProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaVolumeHigh(props: MinaVolumeHighProps): React.ReactElement;
export default MinaVolumeHigh;
