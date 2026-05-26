import React from 'react';

export interface LanDialOffRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialOffRegular: React.FC<LanDialOffRegularProps>;
export default LanDialOffRegular;
