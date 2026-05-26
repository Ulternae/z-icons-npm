import React from 'react';

export interface LanVolumeLowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeLowRegular: React.FC<LanVolumeLowRegularProps>;
export default LanVolumeLowRegular;
