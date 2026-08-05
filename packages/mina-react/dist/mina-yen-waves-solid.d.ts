import React from 'react';

export interface MinaYenWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaYenWavesSolid(props: MinaYenWavesSolidProps): React.ReactElement;
export default MinaYenWavesSolid;
