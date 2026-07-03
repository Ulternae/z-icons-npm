import React from 'react';

export interface BruLumonDropProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruLumonDrop(props: BruLumonDropProps): React.ReactElement;
export default BruLumonDrop;
