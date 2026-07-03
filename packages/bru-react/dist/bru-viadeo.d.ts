import React from 'react';

export interface BruViadeoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruViadeo(props: BruViadeoProps): React.ReactElement;
export default BruViadeo;
