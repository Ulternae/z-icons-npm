import React from 'react';

export interface LanNfcProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfc(props: LanNfcProps): React.ReactElement;
export default LanNfc;
