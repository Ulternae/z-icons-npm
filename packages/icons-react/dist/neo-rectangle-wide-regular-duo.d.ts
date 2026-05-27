import React from 'react';

export interface NeoRectangleWideRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoRectangleWideRegularDuo: React.FC<NeoRectangleWideRegularDuoProps>;
export default NeoRectangleWideRegularDuo;
