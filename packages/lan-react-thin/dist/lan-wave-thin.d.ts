import React from 'react';

export interface LanWaveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaveThin(props: LanWaveThinProps): React.ReactElement;
export default LanWaveThin;
