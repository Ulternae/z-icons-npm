import React from 'react';

export interface MinaPlayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlay(props: MinaPlayProps): React.ReactElement;
export default MinaPlay;
