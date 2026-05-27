import React from 'react';

export interface CoreFaceMehProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFaceMeh: React.FC<CoreFaceMehProps>;
export default CoreFaceMeh;
