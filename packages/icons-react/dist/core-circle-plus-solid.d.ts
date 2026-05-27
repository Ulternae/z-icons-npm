import React from 'react';

export interface CoreCirclePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCirclePlusSolid: React.FC<CoreCirclePlusSolidProps>;
export default CoreCirclePlusSolid;
