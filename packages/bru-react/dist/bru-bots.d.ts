import React from 'react';

export interface BruBotsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruBots(props: BruBotsProps): React.ReactElement;
export default BruBots;
