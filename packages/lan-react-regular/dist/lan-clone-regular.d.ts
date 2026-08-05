import React from 'react';

export interface LanCloneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloneRegular(props: LanCloneRegularProps): React.ReactElement;
export default LanCloneRegular;
