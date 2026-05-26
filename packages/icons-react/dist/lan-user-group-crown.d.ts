import React from 'react';

export interface LanUserGroupCrownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserGroupCrown: React.FC<LanUserGroupCrownProps>;
export default LanUserGroupCrown;
