import React from 'react';

export interface CoreEyeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreEyeSolid: React.FC<CoreEyeSolidProps>;
export default CoreEyeSolid;
