import React from 'react';

export interface CoreDisplayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreDisplay: React.FC<CoreDisplayProps>;
export default CoreDisplay;
