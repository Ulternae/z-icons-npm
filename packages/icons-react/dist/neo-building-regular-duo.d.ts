import React from 'react';

export interface NeoBuildingRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBuildingRegularDuo: React.FC<NeoBuildingRegularDuoProps>;
export default NeoBuildingRegularDuo;
