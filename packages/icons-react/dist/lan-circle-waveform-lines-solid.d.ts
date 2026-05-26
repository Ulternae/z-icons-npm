import React from 'react';

export interface LanCircleWaveformLinesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleWaveformLinesSolid: React.FC<LanCircleWaveformLinesSolidProps>;
export default LanCircleWaveformLinesSolid;
