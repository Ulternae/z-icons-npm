import React from 'react';

export interface LanNfcSignalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcSignalThin(props: LanNfcSignalThinProps): React.ReactElement;
export default LanNfcSignalThin;
