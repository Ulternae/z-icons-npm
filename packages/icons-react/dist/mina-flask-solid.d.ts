import React from 'react';

export interface MinaFlaskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFlaskSolid: React.FC<MinaFlaskSolidProps>;
export default MinaFlaskSolid;
