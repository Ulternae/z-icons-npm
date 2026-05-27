import React from 'react';

export interface CoreBriefcaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBriefcaseSolid: React.FC<CoreBriefcaseSolidProps>;
export default CoreBriefcaseSolid;
