import React from 'react';

export interface MinaCogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCog: React.FC<MinaCogProps>;
export default MinaCog;
