import React from 'react';

export interface LanHelmetBattleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHelmetBattleThin(props: LanHelmetBattleThinProps): React.ReactElement;
export default LanHelmetBattleThin;
