import React from 'react';

export interface BruLumonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruLumon(props: BruLumonProps): React.ReactElement;
export default BruLumon;
