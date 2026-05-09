import React from 'react';

export interface MinaRedoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRedo: React.FC<MinaRedoProps>;
export default MinaRedo;
