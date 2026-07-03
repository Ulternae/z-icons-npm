import React from 'react';

export interface BruKeybaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruKeybase(props: BruKeybaseProps): React.ReactElement;
export default BruKeybase;
