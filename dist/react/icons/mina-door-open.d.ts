import React from 'react';

export interface MinaDoorOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDoorOpen: React.FC<MinaDoorOpenProps>;
export default MinaDoorOpen;
