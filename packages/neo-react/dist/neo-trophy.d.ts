import React from 'react';

export interface NeoTrophyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTrophy(props: NeoTrophyProps): React.ReactElement;
export default NeoTrophy;
