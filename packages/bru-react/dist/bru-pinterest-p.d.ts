import React from 'react';

export interface BruPinterestPProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruPinterestP(props: BruPinterestPProps): React.ReactElement;
export default BruPinterestP;
