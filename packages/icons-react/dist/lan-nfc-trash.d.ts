import React from 'react';

export interface LanNfcTrashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcTrash: React.FC<LanNfcTrashProps>;
export default LanNfcTrash;
