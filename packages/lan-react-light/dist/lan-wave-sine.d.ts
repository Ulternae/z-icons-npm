import React from 'react';

export interface LanWaveSineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaveSine(props: LanWaveSineProps): React.ReactElement;
export default LanWaveSine;
