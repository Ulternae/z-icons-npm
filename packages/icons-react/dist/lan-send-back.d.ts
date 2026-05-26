import React from 'react';

export interface LanSendBackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSendBack: React.FC<LanSendBackProps>;
export default LanSendBack;
