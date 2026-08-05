import React from 'react';

export interface LanMicrophoneSignalMeterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMicrophoneSignalMeter(props: LanMicrophoneSignalMeterProps): React.ReactElement;
export default LanMicrophoneSignalMeter;
