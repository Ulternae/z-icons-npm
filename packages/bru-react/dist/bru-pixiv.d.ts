import React from 'react';

export interface BruPixivProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruPixiv(props: BruPixivProps): React.ReactElement;
export default BruPixiv;
