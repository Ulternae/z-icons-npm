import React from 'react';

export interface LanNfcRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcRegular(props: LanNfcRegularProps): React.ReactElement;
export default LanNfcRegular;
