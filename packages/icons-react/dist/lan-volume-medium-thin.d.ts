import React from 'react';

export interface LanVolumeMediumThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeMediumThin: React.FC<LanVolumeMediumThinProps>;
export default LanVolumeMediumThin;
