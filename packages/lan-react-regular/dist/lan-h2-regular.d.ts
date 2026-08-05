import React from 'react';

export interface LanH2RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanH2Regular(props: LanH2RegularProps): React.ReactElement;
export default LanH2Regular;
