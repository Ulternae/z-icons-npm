import React from 'react';

export interface LanVolumeUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeUp: React.FC<LanVolumeUpProps>;
export default LanVolumeUp;
