import React from 'react';

export interface CoreMicrochipRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMicrochipRegularDuo: React.FC<CoreMicrochipRegularDuoProps>;
export default CoreMicrochipRegularDuo;
