import React from 'react';

export interface LanNfcSignalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcSignalRegular(props: LanNfcSignalRegularProps): React.ReactElement;
export default LanNfcSignalRegular;
