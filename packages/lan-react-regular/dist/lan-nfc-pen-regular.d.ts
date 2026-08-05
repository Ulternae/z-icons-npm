import React from 'react';

export interface LanNfcPenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcPenRegular(props: LanNfcPenRegularProps): React.ReactElement;
export default LanNfcPenRegular;
