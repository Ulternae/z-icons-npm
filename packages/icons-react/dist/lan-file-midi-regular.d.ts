import React from 'react';

export interface LanFileMidiRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMidiRegular: React.FC<LanFileMidiRegularProps>;
export default LanFileMidiRegular;
