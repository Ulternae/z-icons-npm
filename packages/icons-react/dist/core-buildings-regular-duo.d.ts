import React from 'react';

export interface CoreBuildingsRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBuildingsRegularDuo: React.FC<CoreBuildingsRegularDuoProps>;
export default CoreBuildingsRegularDuo;
