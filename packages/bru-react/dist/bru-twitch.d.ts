import React from 'react';

export interface BruTwitchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruTwitch(props: BruTwitchProps): React.ReactElement;
export default BruTwitch;
