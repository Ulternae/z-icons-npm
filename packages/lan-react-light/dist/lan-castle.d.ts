import React from 'react';

export interface LanCastleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCastle(props: LanCastleProps): React.ReactElement;
export default LanCastle;
