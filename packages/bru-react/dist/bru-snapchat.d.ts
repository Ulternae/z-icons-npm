import React from 'react';

export interface BruSnapchatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSnapchat(props: BruSnapchatProps): React.ReactElement;
export default BruSnapchat;
