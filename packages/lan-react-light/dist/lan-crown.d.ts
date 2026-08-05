import React from 'react';

export interface LanCrownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrown(props: LanCrownProps): React.ReactElement;
export default LanCrown;
