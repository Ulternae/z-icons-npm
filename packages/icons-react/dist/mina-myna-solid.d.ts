import React from 'react';

export interface MinaMynaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMynaSolid: React.FC<MinaMynaSolidProps>;
export default MinaMynaSolid;
