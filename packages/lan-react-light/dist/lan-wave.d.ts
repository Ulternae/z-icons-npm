import React from 'react';

export interface LanWaveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWave(props: LanWaveProps): React.ReactElement;
export default LanWave;
