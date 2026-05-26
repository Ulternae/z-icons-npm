import React from 'react';

export interface LanSoapThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSoapThin: React.FC<LanSoapThinProps>;
export default LanSoapThin;
