import React from 'react';

export interface LanInboxFullRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInboxFullRegular: React.FC<LanInboxFullRegularProps>;
export default LanInboxFullRegular;
