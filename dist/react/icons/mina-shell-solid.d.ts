import React from 'react';

export interface MinaShellSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShellSolid: React.FC<MinaShellSolidProps>;
export default MinaShellSolid;
