import React from 'react';

export interface LanMicrophoneSignalMeterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMicrophoneSignalMeterRegular: React.FC<LanMicrophoneSignalMeterRegularProps>;
export default LanMicrophoneSignalMeterRegular;
