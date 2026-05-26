import React from 'react';

export interface LanFileMidiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMidiThin: React.FC<LanFileMidiThinProps>;
export default LanFileMidiThin;
