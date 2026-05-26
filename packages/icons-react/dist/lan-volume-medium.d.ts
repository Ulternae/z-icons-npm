import React from 'react';

export interface LanVolumeMediumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeMedium: React.FC<LanVolumeMediumProps>;
export default LanVolumeMedium;
