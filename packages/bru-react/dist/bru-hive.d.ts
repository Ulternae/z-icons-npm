import React from 'react';

export interface BruHiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruHive(props: BruHiveProps): React.ReactElement;
export default BruHive;
