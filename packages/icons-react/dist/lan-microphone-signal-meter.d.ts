import React from 'react';

export interface LanMicrophoneSignalMeterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMicrophoneSignalMeter: React.FC<LanMicrophoneSignalMeterProps>;
export default LanMicrophoneSignalMeter;
