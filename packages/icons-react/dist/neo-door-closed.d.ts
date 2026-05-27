import React from 'react';

export interface NeoDoorClosedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoDoorClosed: React.FC<NeoDoorClosedProps>;
export default NeoDoorClosed;
