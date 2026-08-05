import React from 'react';

export interface LanSwordProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSword(props: LanSwordProps): React.ReactElement;
export default LanSword;
