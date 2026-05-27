import React from 'react';

export interface NeoPaperPlaneRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPaperPlaneRegularDuo: React.FC<NeoPaperPlaneRegularDuoProps>;
export default NeoPaperPlaneRegularDuo;
