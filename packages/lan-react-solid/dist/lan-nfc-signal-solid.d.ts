import React from 'react';

export interface LanNfcSignalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcSignalSolid(props: LanNfcSignalSolidProps): React.ReactElement;
export default LanNfcSignalSolid;
