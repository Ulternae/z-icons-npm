import React from 'react';

export interface LanEnvelopesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopes: React.FC<LanEnvelopesProps>;
export default LanEnvelopes;
