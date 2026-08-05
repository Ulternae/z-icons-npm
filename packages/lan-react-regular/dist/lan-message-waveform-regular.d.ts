import React from 'react';

export interface LanMessageWaveformRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageWaveformRegular(props: LanMessageWaveformRegularProps): React.ReactElement;
export default LanMessageWaveformRegular;
