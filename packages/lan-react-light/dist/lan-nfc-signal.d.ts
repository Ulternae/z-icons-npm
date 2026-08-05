import React from 'react';

export interface LanNfcSignalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcSignal(props: LanNfcSignalProps): React.ReactElement;
export default LanNfcSignal;
