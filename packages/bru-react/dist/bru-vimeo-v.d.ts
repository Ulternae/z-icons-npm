import React from 'react';

export interface BruVimeoVProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruVimeoV(props: BruVimeoVProps): React.ReactElement;
export default BruVimeoV;
