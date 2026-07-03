import React from 'react';

export interface BruUmbracoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruUmbraco(props: BruUmbracoProps): React.ReactElement;
export default BruUmbraco;
