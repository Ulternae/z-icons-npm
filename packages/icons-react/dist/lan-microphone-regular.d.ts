import React from 'react';

export interface LanMicrophoneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMicrophoneRegular: React.FC<LanMicrophoneRegularProps>;
export default LanMicrophoneRegular;
