import React from 'react';

export interface BruCreativeCommonsRemixProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCreativeCommonsRemix(props: BruCreativeCommonsRemixProps): React.ReactElement;
export default BruCreativeCommonsRemix;
