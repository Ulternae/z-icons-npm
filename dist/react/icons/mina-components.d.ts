import React from 'react';

export interface MinaComponentsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaComponents: React.FC<MinaComponentsProps>;
export default MinaComponents;
