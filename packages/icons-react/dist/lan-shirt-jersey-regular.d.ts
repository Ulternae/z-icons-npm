import React from 'react';

export interface LanShirtJerseyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShirtJerseyRegular: React.FC<LanShirtJerseyRegularProps>;
export default LanShirtJerseyRegular;
