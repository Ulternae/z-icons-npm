import React from 'react';

export interface CorePaintbrushRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePaintbrushRegularDuo: React.FC<CorePaintbrushRegularDuoProps>;
export default CorePaintbrushRegularDuo;
