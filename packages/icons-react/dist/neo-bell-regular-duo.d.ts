import React from 'react';

export interface NeoBellRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBellRegularDuo: React.FC<NeoBellRegularDuoProps>;
export default NeoBellRegularDuo;
