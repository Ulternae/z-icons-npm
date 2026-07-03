import React from 'react';

export interface BruVimProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruVim(props: BruVimProps): React.ReactElement;
export default BruVim;
