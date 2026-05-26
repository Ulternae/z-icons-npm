import React from 'react';

export interface LanBookOpenReaderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookOpenReader: React.FC<LanBookOpenReaderProps>;
export default LanBookOpenReader;
