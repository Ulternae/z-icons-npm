import React from 'react';

export interface MinaThreeWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaThreeWaves(props: MinaThreeWavesProps): React.ReactElement;
export default MinaThreeWaves;
