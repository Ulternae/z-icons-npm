import React from 'react';

export interface LanRubleSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRubleSignThin(props: LanRubleSignThinProps): React.ReactElement;
export default LanRubleSignThin;
