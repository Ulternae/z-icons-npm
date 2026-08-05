import React from 'react';

export interface LanCircleWaveformLinesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleWaveformLinesSolid(props: LanCircleWaveformLinesSolidProps): React.ReactElement;
export default LanCircleWaveformLinesSolid;
