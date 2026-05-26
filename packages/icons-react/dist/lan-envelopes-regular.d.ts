import React from 'react';

export interface LanEnvelopesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEnvelopesRegular: React.FC<LanEnvelopesRegularProps>;
export default LanEnvelopesRegular;
