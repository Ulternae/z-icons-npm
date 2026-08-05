import React from 'react';

export interface LanNfcTrashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcTrashThin(props: LanNfcTrashThinProps): React.ReactElement;
export default LanNfcTrashThin;
