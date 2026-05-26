import React from 'react';

export interface LanUpToDottedLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUpToDottedLineThin: React.FC<LanUpToDottedLineThinProps>;
export default LanUpToDottedLineThin;
