import React from 'react';

export interface MinaCommandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCommandSolid: React.FC<MinaCommandSolidProps>;
export default MinaCommandSolid;
