import React from 'react';

export interface LanMicrophoneStandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMicrophoneStand(props: LanMicrophoneStandProps): React.ReactElement;
export default LanMicrophoneStand;
