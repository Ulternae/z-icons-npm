import React from 'react';

export interface LanChildrenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChildren(props: LanChildrenProps): React.ReactElement;
export default LanChildren;
