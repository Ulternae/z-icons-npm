import React from 'react';

export interface CoreCameraSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCameraSolid: React.FC<CoreCameraSolidProps>;
export default CoreCameraSolid;
