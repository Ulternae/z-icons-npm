import React from 'react';

export interface LanCarMirrorsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarMirrorsSolid(props: LanCarMirrorsSolidProps): React.ReactElement;
export default LanCarMirrorsSolid;
