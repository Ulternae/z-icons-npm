import React from 'react';

export interface LanNfcTrashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcTrashSolid(props: LanNfcTrashSolidProps): React.ReactElement;
export default LanNfcTrashSolid;
