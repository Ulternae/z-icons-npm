import React from 'react';

export interface CoreAngleUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreAngleUpSolid: React.FC<CoreAngleUpSolidProps>;
export default CoreAngleUpSolid;
