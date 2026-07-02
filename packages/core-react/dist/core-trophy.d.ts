import React from 'react';

export interface CoreTrophyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTrophy(props: CoreTrophyProps): React.ReactElement;
export default CoreTrophy;
