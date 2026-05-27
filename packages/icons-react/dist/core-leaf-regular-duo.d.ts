import React from 'react';

export interface CoreLeafRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLeafRegularDuo: React.FC<CoreLeafRegularDuoProps>;
export default CoreLeafRegularDuo;
