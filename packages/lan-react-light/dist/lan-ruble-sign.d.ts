import React from 'react';

export interface LanRubleSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRubleSign(props: LanRubleSignProps): React.ReactElement;
export default LanRubleSign;
