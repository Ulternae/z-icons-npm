import React from 'react';

export interface CoreFaceLaughProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFaceLaugh: React.FC<CoreFaceLaughProps>;
export default CoreFaceLaugh;
