import React from 'react';

export interface LanFilePenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePen: React.FC<LanFilePenProps>;
export default LanFilePen;
