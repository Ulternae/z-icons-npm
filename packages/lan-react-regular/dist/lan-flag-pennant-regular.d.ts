import React from 'react';

export interface LanFlagPennantRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlagPennantRegular(props: LanFlagPennantRegularProps): React.ReactElement;
export default LanFlagPennantRegular;
