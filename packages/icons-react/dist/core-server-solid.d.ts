import React from 'react';

export interface CoreServerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreServerSolid: React.FC<CoreServerSolidProps>;
export default CoreServerSolid;
