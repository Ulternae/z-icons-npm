import React from 'react';

export interface LanMistletoeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMistletoeThin: React.FC<LanMistletoeThinProps>;
export default LanMistletoeThin;
