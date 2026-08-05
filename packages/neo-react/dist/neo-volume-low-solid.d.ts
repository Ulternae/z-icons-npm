import React from 'react';

export interface NeoVolumeLowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoVolumeLowSolid(props: NeoVolumeLowSolidProps): React.ReactElement;
export default NeoVolumeLowSolid;
