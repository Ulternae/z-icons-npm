import React from 'react';

export interface MinaInfoWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInfoWavesSolid: React.FC<MinaInfoWavesSolidProps>;
export default MinaInfoWavesSolid;
