import React from 'react';

export interface BruWhmcsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruWhmcs(props: BruWhmcsProps): React.ReactElement;
export default BruWhmcs;
