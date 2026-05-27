import React from 'react';

export interface CorePaperPlaneRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePaperPlaneRegularDuo: React.FC<CorePaperPlaneRegularDuoProps>;
export default CorePaperPlaneRegularDuo;
