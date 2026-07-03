import React from 'react';

export interface BruRebelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruRebel(props: BruRebelProps): React.ReactElement;
export default BruRebel;
