import React from 'react';

export interface MinaVolumeXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaVolumeX(props: MinaVolumeXProps): React.ReactElement;
export default MinaVolumeX;
