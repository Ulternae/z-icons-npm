import React from 'react';

export interface LanAirplayAudioRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAirplayAudioRegular(props: LanAirplayAudioRegularProps): React.ReactElement;
export default LanAirplayAudioRegular;
