import React from 'react';

export interface LanWaveSineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaveSineRegular(props: LanWaveSineRegularProps): React.ReactElement;
export default LanWaveSineRegular;
