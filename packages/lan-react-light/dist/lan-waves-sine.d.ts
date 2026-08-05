import React from 'react';

export interface LanWavesSineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWavesSine(props: LanWavesSineProps): React.ReactElement;
export default LanWavesSine;
