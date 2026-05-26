import React from 'react';

export interface LanVolumeMediumRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeMediumRegular: React.FC<LanVolumeMediumRegularProps>;
export default LanVolumeMediumRegular;
