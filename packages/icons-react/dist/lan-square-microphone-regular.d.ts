import React from 'react';

export interface LanSquareMicrophoneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareMicrophoneRegular: React.FC<LanSquareMicrophoneRegularProps>;
export default LanSquareMicrophoneRegular;
