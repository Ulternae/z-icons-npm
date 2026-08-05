import React from 'react';

export interface LanWaveformRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaveformRegular(props: LanWaveformRegularProps): React.ReactElement;
export default LanWaveformRegular;
