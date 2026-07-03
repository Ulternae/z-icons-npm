import React from 'react';

export interface BruIntercomProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruIntercom(props: BruIntercomProps): React.ReactElement;
export default BruIntercom;
