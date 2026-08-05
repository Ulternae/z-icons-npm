import React from 'react';

export interface LanTrashPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashPlus(props: LanTrashPlusProps): React.ReactElement;
export default LanTrashPlus;
