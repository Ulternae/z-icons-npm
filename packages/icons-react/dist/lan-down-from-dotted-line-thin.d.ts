import React from 'react';

export interface LanDownFromDottedLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownFromDottedLineThin: React.FC<LanDownFromDottedLineThinProps>;
export default LanDownFromDottedLineThin;
