import React from 'react';

export interface LanDownToDottedLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownToDottedLineThin: React.FC<LanDownToDottedLineThinProps>;
export default LanDownToDottedLineThin;
