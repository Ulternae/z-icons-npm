import React from 'react';

export interface MinaCodeWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCodeWavesSolid(props: MinaCodeWavesSolidProps): React.ReactElement;
export default MinaCodeWavesSolid;
