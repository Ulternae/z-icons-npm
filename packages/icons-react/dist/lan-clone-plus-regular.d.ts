import React from 'react';

export interface LanClonePlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClonePlusRegular: React.FC<LanClonePlusRegularProps>;
export default LanClonePlusRegular;
