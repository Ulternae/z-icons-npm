import React from 'react';

export interface LanFireExtinguisherRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireExtinguisherRegular: React.FC<LanFireExtinguisherRegularProps>;
export default LanFireExtinguisherRegular;
