import React from 'react';

export interface MinaChatXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChatX: React.FC<MinaChatXProps>;
export default MinaChatX;
