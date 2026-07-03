import React from 'react';

export interface BruNeosProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruNeos(props: BruNeosProps): React.ReactElement;
export default BruNeos;
