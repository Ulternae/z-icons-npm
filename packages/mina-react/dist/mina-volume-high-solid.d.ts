import React from 'react';

export interface MinaVolumeHighSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaVolumeHighSolid(props: MinaVolumeHighSolidProps): React.ReactElement;
export default MinaVolumeHighSolid;
