import React from 'react';

export interface Bru42GroupProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const Bru42Group: React.FC<Bru42GroupProps>;
export default Bru42Group;
