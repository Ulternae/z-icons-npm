import React from 'react';

export interface MinaCropProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCrop: React.FC<MinaCropProps>;
export default MinaCrop;
