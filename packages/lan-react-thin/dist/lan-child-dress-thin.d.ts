import React from 'react';

export interface LanChildDressThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChildDressThin(props: LanChildDressThinProps): React.ReactElement;
export default LanChildDressThin;
