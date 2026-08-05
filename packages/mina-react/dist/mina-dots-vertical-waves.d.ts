import React from 'react';

export interface MinaDotsVerticalWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDotsVerticalWaves(props: MinaDotsVerticalWavesProps): React.ReactElement;
export default MinaDotsVerticalWaves;
