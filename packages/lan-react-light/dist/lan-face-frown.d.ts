import React from 'react';

export interface LanFaceFrownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceFrown(props: LanFaceFrownProps): React.ReactElement;
export default LanFaceFrown;
