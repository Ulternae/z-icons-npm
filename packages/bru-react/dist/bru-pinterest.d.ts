import React from 'react';

export interface BruPinterestProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruPinterest(props: BruPinterestProps): React.ReactElement;
export default BruPinterest;
