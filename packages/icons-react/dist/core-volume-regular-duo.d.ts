import React from 'react';

export interface CoreVolumeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreVolumeRegularDuo: React.FC<CoreVolumeRegularDuoProps>;
export default CoreVolumeRegularDuo;
