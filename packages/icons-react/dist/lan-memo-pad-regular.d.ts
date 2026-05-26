import React from 'react';

export interface LanMemoPadRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMemoPadRegular: React.FC<LanMemoPadRegularProps>;
export default LanMemoPadRegular;
