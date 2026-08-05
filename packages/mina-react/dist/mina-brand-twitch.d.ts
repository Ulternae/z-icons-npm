import React from 'react';

export interface MinaBrandTwitchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandTwitch(props: MinaBrandTwitchProps): React.ReactElement;
export default MinaBrandTwitch;
