import React from 'react';

export interface LanFileDashedLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileDashedLineThin: React.FC<LanFileDashedLineThinProps>;
export default LanFileDashedLineThin;
