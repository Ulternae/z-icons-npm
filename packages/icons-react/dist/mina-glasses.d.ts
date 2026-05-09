import React from 'react';

export interface MinaGlassesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGlasses: React.FC<MinaGlassesProps>;
export default MinaGlasses;
