import React from 'react';

export interface LanPickleballRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPickleballRegular: React.FC<LanPickleballRegularProps>;
export default LanPickleballRegular;
