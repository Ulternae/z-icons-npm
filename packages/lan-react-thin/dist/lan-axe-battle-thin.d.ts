import React from 'react';

export interface LanAxeBattleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAxeBattleThin(props: LanAxeBattleThinProps): React.ReactElement;
export default LanAxeBattleThin;
