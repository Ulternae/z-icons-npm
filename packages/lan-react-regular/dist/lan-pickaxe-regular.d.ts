import React from 'react';

export interface LanPickaxeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPickaxeRegular(props: LanPickaxeRegularProps): React.ReactElement;
export default LanPickaxeRegular;
