import React from 'react';

export interface LanSushiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSushi(props: LanSushiProps): React.ReactElement;
export default LanSushi;
