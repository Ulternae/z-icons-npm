import React from 'react';

export interface MinaUndoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUndo: React.FC<MinaUndoProps>;
export default MinaUndo;
