import React from 'react';

export interface CoreVideoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreVideoSolid: React.FC<CoreVideoSolidProps>;
export default CoreVideoSolid;
