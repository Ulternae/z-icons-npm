import React from 'react';

export interface LanBookOpenReaderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookOpenReaderThin(props: LanBookOpenReaderThinProps): React.ReactElement;
export default LanBookOpenReaderThin;
