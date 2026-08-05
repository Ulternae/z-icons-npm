import React from 'react';

export interface MinaVolumeCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaVolumeCheckSolid(props: MinaVolumeCheckSolidProps): React.ReactElement;
export default MinaVolumeCheckSolid;
