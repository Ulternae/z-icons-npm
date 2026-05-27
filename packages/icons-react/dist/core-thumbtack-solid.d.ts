import React from 'react';

export interface CoreThumbtackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreThumbtackSolid: React.FC<CoreThumbtackSolidProps>;
export default CoreThumbtackSolid;
