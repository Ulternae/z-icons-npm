import React from 'react';

export interface LanMicrophoneSignalMeterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMicrophoneSignalMeterThin: React.FC<LanMicrophoneSignalMeterThinProps>;
export default LanMicrophoneSignalMeterThin;
