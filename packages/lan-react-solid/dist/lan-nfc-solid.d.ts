import React from 'react';

export interface LanNfcSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcSolid(props: LanNfcSolidProps): React.ReactElement;
export default LanNfcSolid;
