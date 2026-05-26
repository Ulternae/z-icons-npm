import React from 'react';

export interface LanBookOpenReaderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookOpenReaderThin: React.FC<LanBookOpenReaderThinProps>;
export default LanBookOpenReaderThin;
