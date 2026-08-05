import React from 'react';

export interface LanWaveSineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaveSineThin(props: LanWaveSineThinProps): React.ReactElement;
export default LanWaveSineThin;
