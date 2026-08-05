import React from 'react';

export interface LanNfcPenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcPenThin(props: LanNfcPenThinProps): React.ReactElement;
export default LanNfcPenThin;
