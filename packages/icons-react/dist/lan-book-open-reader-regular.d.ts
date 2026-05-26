import React from 'react';

export interface LanBookOpenReaderRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookOpenReaderRegular: React.FC<LanBookOpenReaderRegularProps>;
export default LanBookOpenReaderRegular;
