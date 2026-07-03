import React from 'react';

export interface BruCmplidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCmplid(props: BruCmplidProps): React.ReactElement;
export default BruCmplid;
