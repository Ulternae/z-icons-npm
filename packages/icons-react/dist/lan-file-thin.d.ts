import React from 'react';

export interface LanFileThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileThin: React.FC<LanFileThinProps>;
export default LanFileThin;
