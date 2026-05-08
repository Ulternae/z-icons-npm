import React from 'react';

export interface MinaDoorClosedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDoorClosed: React.FC<MinaDoorClosedProps>;
export default MinaDoorClosed;
