import React from 'react';

export interface NeoTrashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTrash: React.FC<NeoTrashProps>;
export default NeoTrash;
