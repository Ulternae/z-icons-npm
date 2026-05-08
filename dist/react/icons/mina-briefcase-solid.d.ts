import React from 'react';

export interface MinaBriefcaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBriefcaseSolid: React.FC<MinaBriefcaseSolidProps>;
export default MinaBriefcaseSolid;
