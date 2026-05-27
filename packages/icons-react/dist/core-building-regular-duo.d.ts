import React from 'react';

export interface CoreBuildingRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBuildingRegularDuo: React.FC<CoreBuildingRegularDuoProps>;
export default CoreBuildingRegularDuo;
