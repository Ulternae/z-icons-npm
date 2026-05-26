import React from 'react';

export interface LanShoePrintsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShoePrintsRegular: React.FC<LanShoePrintsRegularProps>;
export default LanShoePrintsRegular;
