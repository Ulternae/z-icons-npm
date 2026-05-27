import React from 'react';

export interface CoreUmbrellaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreUmbrellaSolid: React.FC<CoreUmbrellaSolidProps>;
export default CoreUmbrellaSolid;
