import React from 'react';

export interface LanDialMinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDialMinRegular(props: LanDialMinRegularProps): React.ReactElement;
export default LanDialMinRegular;
