import React from 'react';

export interface LanNfcTrashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcTrashThin: React.FC<LanNfcTrashThinProps>;
export default LanNfcTrashThin;
