import React from 'react';

export interface LanHandWaveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandWave(props: LanHandWaveProps): React.ReactElement;
export default LanHandWave;
