import React from 'react';

export interface LanNfcPenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcPenSolid(props: LanNfcPenSolidProps): React.ReactElement;
export default LanNfcPenSolid;
