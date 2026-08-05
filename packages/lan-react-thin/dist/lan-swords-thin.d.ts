import React from 'react';

export interface LanSwordsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSwordsThin(props: LanSwordsThinProps): React.ReactElement;
export default LanSwordsThin;
