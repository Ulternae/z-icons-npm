import React from 'react';

export interface BruBimobjectProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruBimobject: React.FC<BruBimobjectProps>;
export default BruBimobject;
