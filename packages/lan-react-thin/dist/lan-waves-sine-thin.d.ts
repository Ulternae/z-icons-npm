import React from 'react';

export interface LanWavesSineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWavesSineThin(props: LanWavesSineThinProps): React.ReactElement;
export default LanWavesSineThin;
