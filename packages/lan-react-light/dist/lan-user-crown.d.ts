import React from 'react';

export interface LanUserCrownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserCrown(props: LanUserCrownProps): React.ReactElement;
export default LanUserCrown;
