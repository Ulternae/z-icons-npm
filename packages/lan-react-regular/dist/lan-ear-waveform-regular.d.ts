import React from 'react';

export interface LanEarWaveformRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEarWaveformRegular(props: LanEarWaveformRegularProps): React.ReactElement;
export default LanEarWaveformRegular;
