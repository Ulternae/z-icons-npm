import React from 'react';

export interface LanWifi3ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWifi3Thin: React.FC<LanWifi3ThinProps>;
export default LanWifi3Thin;
