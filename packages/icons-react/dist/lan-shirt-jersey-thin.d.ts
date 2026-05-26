import React from 'react';

export interface LanShirtJerseyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShirtJerseyThin: React.FC<LanShirtJerseyThinProps>;
export default LanShirtJerseyThin;
