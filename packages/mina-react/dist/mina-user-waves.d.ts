import React from 'react';

export interface MinaUserWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUserWaves(props: MinaUserWavesProps): React.ReactElement;
export default MinaUserWaves;
