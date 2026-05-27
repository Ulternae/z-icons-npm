import React from 'react';

export interface CorePlaneUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePlaneUp: React.FC<CorePlaneUpProps>;
export default CorePlaneUp;
