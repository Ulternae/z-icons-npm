import React from 'react';

export interface LanInboxesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInboxesRegular: React.FC<LanInboxesRegularProps>;
export default LanInboxesRegular;
