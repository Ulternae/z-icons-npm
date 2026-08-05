import React from 'react';

export interface LanChildrenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChildrenRegular(props: LanChildrenRegularProps): React.ReactElement;
export default LanChildrenRegular;
