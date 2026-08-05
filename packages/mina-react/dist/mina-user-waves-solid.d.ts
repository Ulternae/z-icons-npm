import React from 'react';

export interface MinaUserWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUserWavesSolid(props: MinaUserWavesSolidProps): React.ReactElement;
export default MinaUserWavesSolid;
