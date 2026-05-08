import React from 'react';

export interface MinaUndoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUndoSolid: React.FC<MinaUndoSolidProps>;
export default MinaUndoSolid;
