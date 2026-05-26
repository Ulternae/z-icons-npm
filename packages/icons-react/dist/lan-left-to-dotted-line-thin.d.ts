import React from 'react';

export interface LanLeftToDottedLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeftToDottedLineThin: React.FC<LanLeftToDottedLineThinProps>;
export default LanLeftToDottedLineThin;
