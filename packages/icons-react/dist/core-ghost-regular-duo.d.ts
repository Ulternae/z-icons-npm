import React from 'react';

export interface CoreGhostRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGhostRegularDuo: React.FC<CoreGhostRegularDuoProps>;
export default CoreGhostRegularDuo;
