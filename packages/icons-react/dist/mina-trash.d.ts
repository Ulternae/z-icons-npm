import React from 'react';

export interface MinaTrashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTrash: React.FC<MinaTrashProps>;
export default MinaTrash;
