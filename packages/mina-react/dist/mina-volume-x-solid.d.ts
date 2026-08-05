import React from 'react';

export interface MinaVolumeXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaVolumeXSolid(props: MinaVolumeXSolidProps): React.ReactElement;
export default MinaVolumeXSolid;
