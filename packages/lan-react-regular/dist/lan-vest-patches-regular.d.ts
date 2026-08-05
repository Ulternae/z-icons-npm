import React from 'react';

export interface LanVestPatchesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVestPatchesRegular(props: LanVestPatchesRegularProps): React.ReactElement;
export default LanVestPatchesRegular;
