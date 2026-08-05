import React from 'react';

export interface LanHandWaveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandWaveThin(props: LanHandWaveThinProps): React.ReactElement;
export default LanHandWaveThin;
