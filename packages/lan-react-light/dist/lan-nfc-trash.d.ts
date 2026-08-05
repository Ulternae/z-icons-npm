import React from 'react';

export interface LanNfcTrashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcTrash(props: LanNfcTrashProps): React.ReactElement;
export default LanNfcTrash;
