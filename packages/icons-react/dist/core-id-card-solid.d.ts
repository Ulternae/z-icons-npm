import React from 'react';

export interface CoreIdCardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreIdCardSolid: React.FC<CoreIdCardSolidProps>;
export default CoreIdCardSolid;
