import React from 'react';

export interface LanCouchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCouchRegular: React.FC<LanCouchRegularProps>;
export default LanCouchRegular;
