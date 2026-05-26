import React from 'react';

export interface LanShuttlecockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShuttlecockRegular: React.FC<LanShuttlecockRegularProps>;
export default LanShuttlecockRegular;
