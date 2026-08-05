import React from 'react';

export interface LanAirplayAudioProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAirplayAudio(props: LanAirplayAudioProps): React.ReactElement;
export default LanAirplayAudio;
