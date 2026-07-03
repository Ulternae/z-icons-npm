import React from 'react';

export interface BruDiggProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruDigg(props: BruDiggProps): React.ReactElement;
export default BruDigg;
