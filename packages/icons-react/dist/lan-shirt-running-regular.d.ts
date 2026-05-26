import React from 'react';

export interface LanShirtRunningRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShirtRunningRegular: React.FC<LanShirtRunningRegularProps>;
export default LanShirtRunningRegular;
