import React from 'react';

export interface MinaMusicProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMusic(props: MinaMusicProps): React.ReactElement;
export default MinaMusic;
