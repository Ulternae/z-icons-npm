import React from 'react';

export interface LanChestnutRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChestnutRegular(props: LanChestnutRegularProps): React.ReactElement;
export default LanChestnutRegular;
