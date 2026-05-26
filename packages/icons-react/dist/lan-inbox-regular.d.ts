import React from 'react';

export interface LanInboxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInboxRegular: React.FC<LanInboxRegularProps>;
export default LanInboxRegular;
