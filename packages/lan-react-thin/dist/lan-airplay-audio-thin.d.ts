import React from 'react';

export interface LanAirplayAudioThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAirplayAudioThin(props: LanAirplayAudioThinProps): React.ReactElement;
export default LanAirplayAudioThin;
