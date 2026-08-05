import React from 'react';

export interface NeoPlayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPlay(props: NeoPlayProps): React.ReactElement;
export default NeoPlay;
