import React from 'react';

export interface BruSquareSnapchatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSquareSnapchat(props: BruSquareSnapchatProps): React.ReactElement;
export default BruSquareSnapchat;
