import React from 'react';

export interface LanNfcTrashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcTrashSolid: React.FC<LanNfcTrashSolidProps>;
export default LanNfcTrashSolid;
