import React from 'react';

export interface LanNfcThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcThin(props: LanNfcThinProps): React.ReactElement;
export default LanNfcThin;
