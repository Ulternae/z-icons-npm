import React from 'react';

export interface LanArrowsToDottedLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsToDottedLineThin: React.FC<LanArrowsToDottedLineThinProps>;
export default LanArrowsToDottedLineThin;
