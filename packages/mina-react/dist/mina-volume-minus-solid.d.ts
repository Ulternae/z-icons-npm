import React from 'react';

export interface MinaVolumeMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaVolumeMinusSolid(props: MinaVolumeMinusSolidProps): React.ReactElement;
export default MinaVolumeMinusSolid;
