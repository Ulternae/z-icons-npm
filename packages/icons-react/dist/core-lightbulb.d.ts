import React from 'react';

export interface CoreLightbulbProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLightbulb: React.FC<CoreLightbulbProps>;
export default CoreLightbulb;
