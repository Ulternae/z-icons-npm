import React from 'react';

export interface MinaThreeWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaThreeWavesSolid(props: MinaThreeWavesSolidProps): React.ReactElement;
export default MinaThreeWavesSolid;
