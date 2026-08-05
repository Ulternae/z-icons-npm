import React from 'react';

export interface LanUserGroupCrownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserGroupCrown(props: LanUserGroupCrownProps): React.ReactElement;
export default LanUserGroupCrown;
