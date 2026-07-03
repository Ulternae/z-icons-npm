import React from 'react';

export interface BruYarnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruYarn(props: BruYarnProps): React.ReactElement;
export default BruYarn;
