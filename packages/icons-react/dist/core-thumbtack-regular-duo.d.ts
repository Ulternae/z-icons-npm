import React from 'react';

export interface CoreThumbtackRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreThumbtackRegularDuo: React.FC<CoreThumbtackRegularDuoProps>;
export default CoreThumbtackRegularDuo;
