import React from 'react';

export interface MinaVolumeLowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaVolumeLowSolid(props: MinaVolumeLowSolidProps): React.ReactElement;
export default MinaVolumeLowSolid;
