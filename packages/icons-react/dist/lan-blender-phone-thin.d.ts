import React from 'react';

export interface LanBlenderPhoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlenderPhoneThin: React.FC<LanBlenderPhoneThinProps>;
export default LanBlenderPhoneThin;
