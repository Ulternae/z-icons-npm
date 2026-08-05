import React from 'react';

export interface MinaInfoWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInfoWavesSolid(props: MinaInfoWavesSolidProps): React.ReactElement;
export default MinaInfoWavesSolid;
