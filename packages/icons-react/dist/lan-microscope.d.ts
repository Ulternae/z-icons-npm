import React from 'react';

export interface LanMicroscopeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMicroscope: React.FC<LanMicroscopeProps>;
export default LanMicroscope;
