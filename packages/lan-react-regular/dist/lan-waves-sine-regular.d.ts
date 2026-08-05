import React from 'react';

export interface LanWavesSineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWavesSineRegular(props: LanWavesSineRegularProps): React.ReactElement;
export default LanWavesSineRegular;
