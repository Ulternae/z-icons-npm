import React from 'react';

export interface LanTrashPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashPlusRegular(props: LanTrashPlusRegularProps): React.ReactElement;
export default LanTrashPlusRegular;
