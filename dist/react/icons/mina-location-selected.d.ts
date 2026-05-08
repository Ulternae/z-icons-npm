import React from 'react';

export interface MinaLocationSelectedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLocationSelected: React.FC<MinaLocationSelectedProps>;
export default MinaLocationSelected;
