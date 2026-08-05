import React from 'react';

export interface LanNfcPenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcPen(props: LanNfcPenProps): React.ReactElement;
export default LanNfcPen;
