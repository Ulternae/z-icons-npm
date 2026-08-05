import React from 'react';

export interface LanWaveSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaveSquareThin(props: LanWaveSquareThinProps): React.ReactElement;
export default LanWaveSquareThin;
