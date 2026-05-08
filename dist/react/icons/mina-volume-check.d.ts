import React from 'react';

export interface MinaVolumeCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaVolumeCheck: React.FC<MinaVolumeCheckProps>;
export default MinaVolumeCheck;
