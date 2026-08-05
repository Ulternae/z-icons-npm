import React from 'react';

export interface LanFlagPennantProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlagPennant(props: LanFlagPennantProps): React.ReactElement;
export default LanFlagPennant;
