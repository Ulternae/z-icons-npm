import React from 'react';

export interface LanWifi2ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWifi2Thin: React.FC<LanWifi2ThinProps>;
export default LanWifi2Thin;
