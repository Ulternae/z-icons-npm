import React from 'react';

export interface MinaVolumeNoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaVolumeNoneSolid(props: MinaVolumeNoneSolidProps): React.ReactElement;
export default MinaVolumeNoneSolid;
