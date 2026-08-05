import React from 'react';

export interface LanChestDrawersRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChestDrawersRegular(props: LanChestDrawersRegularProps): React.ReactElement;
export default LanChestDrawersRegular;
