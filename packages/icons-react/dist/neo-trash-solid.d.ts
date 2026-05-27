import React from 'react';

export interface NeoTrashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTrashSolid: React.FC<NeoTrashSolidProps>;
export default NeoTrashSolid;
