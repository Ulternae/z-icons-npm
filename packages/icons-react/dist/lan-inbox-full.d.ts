import React from 'react';

export interface LanInboxFullProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInboxFull: React.FC<LanInboxFullProps>;
export default LanInboxFull;
