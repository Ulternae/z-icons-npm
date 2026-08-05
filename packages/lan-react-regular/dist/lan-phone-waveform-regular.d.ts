import React from 'react';

export interface LanPhoneWaveformRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhoneWaveformRegular(props: LanPhoneWaveformRegularProps): React.ReactElement;
export default LanPhoneWaveformRegular;
