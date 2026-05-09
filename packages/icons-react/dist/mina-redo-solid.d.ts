import React from 'react';

export interface MinaRedoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRedoSolid: React.FC<MinaRedoSolidProps>;
export default MinaRedoSolid;
